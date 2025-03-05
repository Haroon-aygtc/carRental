import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  LayoutDashboard,
  Users,
  Car,
  Calendar,
  DollarSign,
  BarChart3,
  Settings,
  LogOut,
  ChevronRight,
  ChevronLeft,
  Menu,
} from "lucide-react";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  isActive: boolean;
  isCollapsed: boolean;
  hasSubmenu?: boolean;
  submenuItems?: { label: string; path: string }[];
}

const SidebarItem = ({
  icon,
  label,
  path,
  isActive,
  isCollapsed,
  hasSubmenu = false,
  submenuItems = [],
}: SidebarItemProps) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = (e: React.MouseEvent) => {
    if (hasSubmenu) {
      e.preventDefault();
      setIsSubmenuOpen(!isSubmenuOpen);
    }
  };

  if (isCollapsed) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="mb-2">
              <Link
                to={path}
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-md",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                )}
                onClick={toggleSubmenu}
              >
                <div className="flex items-center justify-center">{icon}</div>
              </Link>
            </div>
          </TooltipTrigger>
          <TooltipContent side="right">{label}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <div className="mb-1">
      <Link
        to={path}
        className={cn(
          "flex h-10 w-full items-center rounded-md px-3 py-2",
          isActive
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        )}
        onClick={toggleSubmenu}
      >
        <div className="mr-2">{icon}</div>
        <span className="flex-1">{label}</span>
        {hasSubmenu && (
          <div className="ml-auto">
            {isSubmenuOpen ? (
              <ChevronRight size={16} />
            ) : (
              <ChevronLeft size={16} />
            )}
          </div>
        )}
      </Link>

      {hasSubmenu && isSubmenuOpen && (
        <div className="ml-6 mt-1 space-y-1">
          {submenuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex h-8 items-center rounded-md px-3 py-1 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

interface AdminSidebarProps {
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

const AdminSidebar = ({
  collapsed = false,
  onToggleCollapse = () => {},
}: AdminSidebarProps) => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(collapsed);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    onToggleCollapse();
  };

  const sidebarItems = [
    {
      icon: <LayoutDashboard size={20} />,
      label: "Dashboard",
      path: "/admin/dashboard",
    },
    {
      icon: <Users size={20} />,
      label: "User Management",
      path: "/admin/user-management",
      hasSubmenu: true,
      submenuItems: [
        { label: "View Users", path: "/admin/user-management/view" },
        { label: "Add/Edit Users", path: "/admin/user-management/add-edit" },
        { label: "Roles & Permissions", path: "/admin/user-management/roles" },
      ],
    },
    {
      icon: <Users size={20} />,
      label: "Driver Management",
      path: "/admin/driver-management",
      hasSubmenu: true,
      submenuItems: [
        { label: "View Drivers", path: "/admin/driver-management/view" },
        {
          label: "Add/Edit Drivers",
          path: "/admin/driver-management/add-edit",
        },
        {
          label: "Assign Vehicles",
          path: "/admin/driver-management/assign-vehicles",
        },
        { label: "Performance", path: "/admin/driver-management/performance" },
      ],
    },
    {
      icon: <Car size={20} />,
      label: "Fleet Management",
      path: "/admin/fleet-management",
      hasSubmenu: true,
      submenuItems: [
        { label: "View Vehicles", path: "/admin/fleet-management/view" },
        {
          label: "Add/Edit Vehicles",
          path: "/admin/fleet-management/add-edit",
        },
        { label: "Maintenance", path: "/admin/fleet-management/maintenance" },
      ],
    },
    {
      icon: <Calendar size={20} />,
      label: "Booking Management",
      path: "/admin/booking-management",
      hasSubmenu: true,
      submenuItems: [
        { label: "View Bookings", path: "/admin/booking-management/view" },
        { label: "Manage Status", path: "/admin/booking-management/status" },
        {
          label: "Assign Drivers",
          path: "/admin/booking-management/assign-drivers",
        },
      ],
    },
    {
      icon: <DollarSign size={20} />,
      label: "Financial Tools",
      path: "/admin/financial-tools",
      hasSubmenu: true,
      submenuItems: [
        { label: "Payroll", path: "/admin/financial-tools/payroll" },
        { label: "Expenses", path: "/admin/financial-tools/expenses" },
        { label: "Revenue", path: "/admin/financial-tools/revenue" },
      ],
    },
    {
      icon: <BarChart3 size={20} />,
      label: "Reports",
      path: "/admin/reports",
    },
    {
      icon: <Settings size={20} />,
      label: "Settings",
      path: "/admin/settings",
    },
  ];

  return (
    <div
      className={cn(
        "flex h-full flex-col border-r bg-background transition-all duration-300",
        isCollapsed ? "w-16" : "w-64",
      )}
    >
      <div className="flex h-16 items-center justify-between border-b px-4">
        {!isCollapsed && (
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">TMS</span>
            <span className="ml-2 text-xl font-bold">Admin</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={toggleCollapse}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <Menu size={20} />
        </Button>
      </div>

      <ScrollArea className="flex-1 px-3 py-4">
        <div className="space-y-1">
          {sidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              label={item.label}
              path={item.path}
              isActive={location.pathname === item.path}
              isCollapsed={isCollapsed}
              hasSubmenu={item.hasSubmenu}
              submenuItems={item.submenuItems}
            />
          ))}
        </div>
      </ScrollArea>

      <div className="border-t p-3">
        {isCollapsed ? (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10"
                  aria-label="Logout"
                >
                  <LogOut size={20} />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">Logout</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <Button
            variant="ghost"
            className="w-full justify-start"
            aria-label="Logout"
          >
            <LogOut size={20} className="mr-2" />
            <span>Logout</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default AdminSidebar;
