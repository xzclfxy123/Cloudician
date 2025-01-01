import { AppSidebar } from "@/components/sidebar";
import { TopBar } from "@/components/top-bar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`font-msyahei antialiased`}>
        <SidebarProvider>
          <div className="flex w-full h-screen bg-gray-100">
            <AppSidebar />
            <SidebarInset className="flex flex-col flex-1 overflow-hidden">
              <TopBar />
              {children}
            </SidebarInset>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
