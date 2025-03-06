export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          first_name: string;
          last_name: string;
          email: string;
          phone: string | null;
          address: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          first_name: string;
          last_name: string;
          email: string;
          phone?: string | null;
          address?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          first_name?: string;
          last_name?: string;
          email?: string;
          phone?: string | null;
          address?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      roles: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      permissions: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          module: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          module: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string | null;
          module?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      role_permissions: {
        Row: {
          role_id: string;
          permission_id: string;
          created_at: string;
        };
        Insert: {
          role_id: string;
          permission_id: string;
          created_at?: string;
        };
        Update: {
          role_id?: string;
          permission_id?: string;
          created_at?: string;
        };
      };
      user_roles: {
        Row: {
          user_id: string;
          role_id: string;
          created_at: string;
        };
        Insert: {
          user_id: string;
          role_id: string;
          created_at?: string;
        };
        Update: {
          user_id?: string;
          role_id?: string;
          created_at?: string;
        };
      };
      drivers: {
        Row: {
          id: string;
          user_id: string;
          license_number: string;
          license_expiry: string;
          status: string;
          rating: number | null;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          license_number: string;
          license_expiry: string;
          status: string;
          rating?: number | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          license_number?: string;
          license_expiry?: string;
          status?: string;
          rating?: number | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      vehicles: {
        Row: {
          id: string;
          make: string;
          model: string;
          year: number;
          license_plate: string;
          vin: string;
          type: string;
          capacity: number;
          color: string | null;
          status: string;
          last_maintenance: string | null;
          next_maintenance: string | null;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          make: string;
          model: string;
          year: number;
          license_plate: string;
          vin: string;
          type: string;
          capacity: number;
          color?: string | null;
          status: string;
          last_maintenance?: string | null;
          next_maintenance?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          make?: string;
          model?: string;
          year?: number;
          license_plate?: string;
          vin?: string;
          type?: string;
          capacity?: number;
          color?: string | null;
          status?: string;
          last_maintenance?: string | null;
          next_maintenance?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      driver_vehicles: {
        Row: {
          id: string;
          driver_id: string;
          vehicle_id: string;
          assigned_at: string;
          active: boolean;
        };
        Insert: {
          id?: string;
          driver_id: string;
          vehicle_id: string;
          assigned_at?: string;
          active?: boolean;
        };
        Update: {
          id?: string;
          driver_id?: string;
          vehicle_id?: string;
          assigned_at?: string;
          active?: boolean;
        };
      };
      passengers: {
        Row: {
          id: string;
          user_id: string;
          preferred_payment_method: string | null;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          preferred_payment_method?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          preferred_payment_method?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      bookings: {
        Row: {
          id: string;
          passenger_id: string | null;
          driver_id: string | null;
          vehicle_id: string | null;
          pickup_location: string;
          destination: string;
          pickup_date: string;
          pickup_time: string;
          vehicle_type: string;
          passengers: number;
          status: string;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          passenger_id?: string | null;
          driver_id?: string | null;
          vehicle_id?: string | null;
          pickup_location: string;
          destination: string;
          pickup_date: string;
          pickup_time: string;
          vehicle_type: string;
          passengers: number;
          status: string;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          passenger_id?: string | null;
          driver_id?: string | null;
          vehicle_id?: string | null;
          pickup_location?: string;
          destination?: string;
          pickup_date?: string;
          pickup_time?: string;
          vehicle_type?: string;
          passengers?: number;
          status?: string;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      payments: {
        Row: {
          id: string;
          booking_id: string;
          amount: number;
          payment_method: string;
          status: string;
          transaction_id: string | null;
          payment_date: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          booking_id: string;
          amount: number;
          payment_method: string;
          status: string;
          transaction_id?: string | null;
          payment_date?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          booking_id?: string;
          amount?: number;
          payment_method?: string;
          status?: string;
          transaction_id?: string | null;
          payment_date?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      expenses: {
        Row: {
          id: string;
          amount: number;
          category: string;
          description: string | null;
          date: string;
          payment_method: string | null;
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          amount: number;
          category: string;
          description?: string | null;
          date: string;
          payment_method?: string | null;
          status: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          amount?: number;
          category?: string;
          description?: string | null;
          date?: string;
          payment_method?: string | null;
          status?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      maintenance_records: {
        Row: {
          id: string;
          vehicle_id: string;
          type: string;
          description: string | null;
          date: string;
          cost: number | null;
          status: string;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          vehicle_id: string;
          type: string;
          description?: string | null;
          date: string;
          cost?: number | null;
          status: string;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          vehicle_id?: string;
          type?: string;
          description?: string | null;
          date?: string;
          cost?: number | null;
          status?: string;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      driver_payroll: {
        Row: {
          id: string;
          driver_id: string;
          period_start: string;
          period_end: string;
          base_amount: number;
          bonus_amount: number | null;
          deduction_amount: number | null;
          total_amount: number;
          status: string;
          payment_date: string | null;
          notes: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          driver_id: string;
          period_start: string;
          period_end: string;
          base_amount: number;
          bonus_amount?: number | null;
          deduction_amount?: number | null;
          total_amount: number;
          status: string;
          payment_date?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          driver_id?: string;
          period_start?: string;
          period_end?: string;
          base_amount?: number;
          bonus_amount?: number | null;
          deduction_amount?: number | null;
          total_amount?: number;
          status?: string;
          payment_date?: string | null;
          notes?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      reports: {
        Row: {
          id: string;
          title: string;
          type: string;
          format: string;
          parameters: Json | null;
          created_by: string | null;
          file_path: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          type: string;
          format: string;
          parameters?: Json | null;
          created_by?: string | null;
          file_path?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          type?: string;
          format?: string;
          parameters?: Json | null;
          created_by?: string | null;
          file_path?: string | null;
          created_at?: string;
        };
      };
    };
    Views: {};
    Functions: {};
    Enums: {};
  };
}
