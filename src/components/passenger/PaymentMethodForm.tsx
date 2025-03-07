import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface PaymentMethodFormProps {
  onAddCard: (card: any) => void;
  onCancel: () => void;
}

const PaymentMethodForm = ({ onAddCard, onCancel }: PaymentMethodFormProps) => {
  const [newCard, setNewCard] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvc: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCard({
      ...newCard,
      [name]: value,
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!newCard.cardName.trim()) {
      newErrors.cardName = "Name is required";
    }

    if (!newCard.cardNumber.trim()) {
      newErrors.cardNumber = "Card number is required";
    } else if (!/^\d{13,19}$/.test(newCard.cardNumber.replace(/\s/g, ""))) {
      newErrors.cardNumber = "Invalid card number";
    }

    if (!newCard.expiry.trim()) {
      newErrors.expiry = "Expiry date is required";
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(newCard.expiry)) {
      newErrors.expiry = "Invalid format (MM/YY)";
    }

    if (!newCard.cvc.trim()) {
      newErrors.cvc = "CVC is required";
    } else if (!/^\d{3,4}$/.test(newCard.cvc)) {
      newErrors.cvc = "Invalid CVC";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Determine card brand based on first digit
      let brand = "Unknown";
      const firstDigit = newCard.cardNumber.charAt(0);
      if (firstDigit === "4") {
        brand = "Visa";
      } else if (firstDigit === "5") {
        brand = "Mastercard";
      } else if (firstDigit === "3") {
        brand = "Amex";
      } else if (firstDigit === "6") {
        brand = "Discover";
      }

      // Format card for display
      const formattedCard = {
        id: `pm${Date.now()}`,
        type: "credit",
        brand,
        last4: newCard.cardNumber.slice(-4),
        expiry: newCard.expiry,
        isDefault: false,
      };

      onAddCard(formattedCard);
      toast({
        title: "Payment method added",
        description: `${brand} card ending in ${formattedCard.last4} has been added to your account.`,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
          className={errors.cardName ? "border-red-500" : ""}
        />
        {errors.cardName && (
          <p className="text-red-500 text-sm">{errors.cardName}</p>
        )}
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
            className={`pl-10 ${errors.cardNumber ? "border-red-500" : ""}`}
          />
        </div>
        {errors.cardNumber && (
          <p className="text-red-500 text-sm">{errors.cardNumber}</p>
        )}
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
            className={errors.expiry ? "border-red-500" : ""}
          />
          {errors.expiry && (
            <p className="text-red-500 text-sm">{errors.expiry}</p>
          )}
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
            className={errors.cvc ? "border-red-500" : ""}
          />
          {errors.cvc && <p className="text-red-500 text-sm">{errors.cvc}</p>}
        </div>
      </div>

      <div className="pt-4 flex justify-end space-x-2">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
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
  );
};

export default PaymentMethodForm;
