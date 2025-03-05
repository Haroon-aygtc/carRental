import React, { useState } from "react";
import {
  Bell,
  CheckCircle,
  Info,
  AlertTriangle,
  X,
  Clock,
  Settings,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type NotificationType = "info" | "warning" | "success" | "error";

interface Notification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  timestamp: Date;
  read: boolean;
}

interface SystemNotificationsProps {
  notifications?: Notification[];
  onMarkAsRead?: (id: string) => void;
  onDismiss?: (id: string) => void;
  onClearAll?: () => void;
}

const getNotificationIcon = (type: NotificationType) => {
  switch (type) {
    case "info":
      return <Info className="h-5 w-5 text-blue-500" />;
    case "warning":
      return <AlertTriangle className="h-5 w-5 text-amber-500" />;
    case "success":
      return <CheckCircle className="h-5 w-5 text-green-500" />;
    case "error":
      return <AlertTriangle className="h-5 w-5 text-red-500" />;
    default:
      return <Info className="h-5 w-5 text-blue-500" />;
  }
};

const getNotificationBadge = (type: NotificationType) => {
  switch (type) {
    case "info":
      return <Badge variant="secondary">Info</Badge>;
    case "warning":
      return (
        <Badge variant="default" className="bg-amber-500">
          Warning
        </Badge>
      );
    case "success":
      return (
        <Badge variant="default" className="bg-green-500">
          Success
        </Badge>
      );
    case "error":
      return <Badge variant="destructive">Error</Badge>;
    default:
      return <Badge variant="secondary">Info</Badge>;
  }
};

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

const SystemNotifications = ({
  notifications = [
    {
      id: "1",
      title: "Maintenance Scheduled",
      message:
        "System maintenance scheduled for tonight at 2:00 AM. Expected downtime: 30 minutes.",
      type: "info",
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      read: false,
    },
    {
      id: "2",
      title: "Vehicle #A-123 Maintenance Due",
      message: "Scheduled maintenance for Vehicle #A-123 is due in 3 days.",
      type: "warning",
      timestamp: new Date(Date.now() - 1000 * 60 * 120),
      read: false,
    },
    {
      id: "3",
      title: "New Driver Approved",
      message:
        "Driver John Smith has been approved and is ready for assignment.",
      type: "success",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
      read: true,
    },
    {
      id: "4",
      title: "Booking System Error",
      message:
        "Error processing booking #BK-5678. Manual intervention required.",
      type: "error",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      read: false,
    },
    {
      id: "5",
      title: "New Feature Available",
      message:
        "Route optimization feature is now available. Check settings to enable.",
      type: "info",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
      read: true,
    },
  ],
  onMarkAsRead = () => {},
  onDismiss = () => {},
  onClearAll = () => {},
}: SystemNotificationsProps) => {
  const [filter, setFilter] = useState<NotificationType | "all">("all");

  const filteredNotifications =
    filter === "all"
      ? notifications
      : notifications.filter((notification) => notification.type === filter);

  const unreadCount = notifications.filter(
    (notification) => !notification.read,
  ).length;

  return (
    <Card className="w-full bg-white shadow-md">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center space-x-2">
          <Bell className="h-5 w-5 text-gray-500" />
          <CardTitle className="text-xl">System Notifications</CardTitle>
          {unreadCount > 0 && (
            <Badge variant="secondary" className="ml-2">
              {unreadCount} unread
            </Badge>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setFilter("all")}
            className={filter === "all" ? "bg-gray-100" : ""}
          >
            All
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setFilter("info")}
            className={filter === "info" ? "bg-gray-100" : ""}
          >
            Info
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setFilter("warning")}
            className={filter === "warning" ? "bg-gray-100" : ""}
          >
            Warning
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setFilter("error")}
            className={filter === "error" ? "bg-gray-100" : ""}
          >
            Error
          </Button>
          <Button variant="outline" size="sm" onClick={onClearAll}>
            Clear All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        {filteredNotifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 text-gray-500">
            <Bell className="h-12 w-12 mb-3 text-gray-300" />
            <p>No notifications to display</p>
          </div>
        ) : (
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                className={`relative flex items-start p-4 rounded-lg border ${notification.read ? "bg-white" : "bg-blue-50"}`}
              >
                <div className="flex-shrink-0 mr-3 mt-1">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-medium text-gray-900">
                      {notification.title}
                    </h4>
                    {getNotificationBadge(notification.type)}
                  </div>
                  <p className="text-sm text-gray-600 mb-1">
                    {notification.message}
                  </p>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="h-3 w-3 mr-1" />
                    {formatDate(notification.timestamp)}
                  </div>
                </div>
                <div className="flex-shrink-0 ml-4 flex flex-col space-y-2">
                  {!notification.read && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 px-2 text-xs"
                      onClick={() => onMarkAsRead(notification.id)}
                    >
                      Mark as read
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6"
                    onClick={() => onDismiss(notification.id)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-end mt-4">
          <Button variant="outline" size="sm" className="flex items-center">
            <Settings className="h-4 w-4 mr-2" />
            Notification Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SystemNotifications;
