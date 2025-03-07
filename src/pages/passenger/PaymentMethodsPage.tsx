import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { CreditCard, Plus, Trash2, Check, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PaymentMethodsPage = () => {
  // Mock payment methods
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: "pm1",
      type: "credit",
      brand: "Visa",
      last4: "4242",
      expiry: "04/25",
      isDefault: true,
    },
    {
      id: "pm2",
      type: "credit",
      brand: "Mastercard",
      last4: "5555",
      expiry: "08/24",
      isDefault: false,
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newCard, setNewCard] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvc: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCard({
      ...newCard,
      [name]: value,
    });
  };

  const handleAddCard = (e) => {
    e.preventDefault();
    // In a real app, would send to payment processor
    const newPaymentMethod = {
      id: `pm${paymentMethods.length + 1}`,
      type: "credit",
      brand: "Visa", // Would be determined by the card number in a real app
      last4: newCard.cardNumber.slice(-4),
      expiry: newCard.expiry,
      isDefault: false,
    };

    setPaymentMethods([...paymentMethods, newPaymentMethod]);
    setNewCard({
      cardNumber: "",
      cardName: "",
      expiry: "",
      cvc: "",
    });
    setShowAddForm(false);
  };

  const handleSetDefault = (id) => {
    setPaymentMethods(
      paymentMethods.map((method) => ({
        ...method,
        isDefault: method.id === id,
      })),
    );
  };

  const handleDeleteCard = (id) => {
    setPaymentMethods(paymentMethods.filter((method) => method.id !== id));
  };

  const getBrandIcon = (brand) => {
    switch (brand.toLowerCase()) {
      case "visa":
        return (
          <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
            VISA
          </div>
        );
      case "mastercard":
        return (
          <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
            MC
          </div>
        );
      default:
        return (
          <div className="bg-gray-600 text-white px-2 py-1 rounded text-xs font-bold">
            CARD
          </div>
        );
    }
  };

  return (
    <div className="bg-[#F7F7F7] min-h-screen font-serif">
      <header className="bg-[#001F3F] text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-white hover:text-gray-200">
              <span className="text-xl font-bold font-sans">TMS</span>
              <span className="ml-2 text-xl font-sans">Passenger Portal</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/passenger/dashboard">
              <Button variant="ghost" size="sm" className="text-white">
                <ArrowLeft className="h-4 w-4 mr-1" /> Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="max-w-2xl mx-auto bg-white shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-2xl font-bold font-sans">
              Payment Methods
            </CardTitle>
            {!showAddForm && (
              <Button
                onClick={() => setShowAddForm(true)}
                className="bg-[#001F3F] hover:bg-blue-900 text-white font-sans rounded-md shadow-sm"
              >
                <Plus className="h-4 w-4 mr-2" /> Add New Card
              </Button>
            )}
          </CardHeader>
          <CardContent>
            {showAddForm ? (
              <div className="border rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4 font-sans">
                  Add New Payment Method
                </h3>
                <form onSubmit={handleAddCard} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardName" className="font-sans">
                      Name on Card
                    </Label>
                    <Input
                      id="cardName"
                      name="cardName"
                      value={newCard.cardName}
                      onChange={handleInputChange}
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber" className="font-sans">
                      Card Number
                    </Label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        value={newCard.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        className="pl-10"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry" className="font-sans">
                        Expiry Date
                      </Label>
                      <Input
                        id="expiry"
                        name="expiry"
                        value={newCard.expiry}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc" className="font-sans">
                        CVC
                      </Label>
                      <Input
                        id="cvc"
                        name="cvc"
                        value={newCard.cvc}
                        onChange={handleInputChange}
                        placeholder="123"
                        required
                      />
                    </div>
                  </div>
                  <div className="pt-4 flex justify-end space-x-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowAddForm(false)}
                      className="font-sans"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-[#001F3F] hover:bg-blue-900 text-white font-sans rounded-md shadow-sm"
                    >
                      Add Card
                    </Button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="space-y-4">
                {paymentMethods.length > 0 ? (
                  paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className={`border rounded-lg p-4 ${method.isDefault ? "border-blue-500 bg-blue-50" : ""}`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          {getBrandIcon(method.brand)}
                          <div className="ml-3">
                            <p className="font-medium">
                              {method.brand} •••• {method.last4}
                            </p>
                            <p className="text-sm text-gray-500">
                              Expires {method.expiry}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          {method.isDefault && (
                            <Badge className="mr-2 bg-blue-100 text-blue-800">
                              Default
                            </Badge>
                          )}
                          <div className="flex space-x-2">
                            {!method.isDefault && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleSetDefault(method.id)}
                                className="font-sans"
                              >
                                <Check className="h-4 w-4 mr-1" /> Set Default
                              </Button>
                            )}
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDeleteCard(method.id)}
                              className="text-red-500 hover:text-red-700 hover:bg-red-50 font-sans"
                              disabled={method.isDefault}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <CreditCard className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium mb-2 font-sans">
                      No Payment Methods
                    </h3>
                    <p className="text-gray-500 mb-4">
                      You haven't added any payment methods yet.
                    </p>
                    <Button
                      onClick={() => setShowAddForm(true)}
                      className="bg-[#001F3F] hover:bg-blue-900 text-white font-sans rounded-md shadow-sm"
                    >
                      <Plus className="h-4 w-4 mr-2" /> Add Payment Method
                    </Button>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Payment History */}
        <Card className="max-w-2xl mx-auto bg-white shadow-lg mt-8">
          <CardHeader>
            <CardTitle className="text-xl font-bold font-sans">
              Payment History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Mock payment history */}
              {[
                {
                  id: "pay1",
                  date: "2023-06-28",
                  amount: 120.5,
                  description: "Airport Transfer - JFK to Manhattan",
                  status: "completed",
                },
                {
                  id: "pay2",
                  date: "2023-06-15",
                  amount: 85.75,
                  description: "City Tour - Manhattan",
                  status: "completed",
                },
                {
                  id: "pay3",
                  date: "2023-05-30",
                  amount: 150.25,
                  description: "Corporate Event Transportation",
                  status: "completed",
                },
              ].map((payment) => (
                <div key={payment.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{payment.description}</p>
                      <p className="text-sm text-gray-500">{payment.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-[#001F3F]">
                        ${payment.amount.toFixed(2)}
                      </p>
                      <Badge className="bg-green-100 text-green-800">
                        {payment.status}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default PaymentMethodsPage;
