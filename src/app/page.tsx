import AppLayout from "@/components/AppLayout";
import AppThemeProvider from "@/components/AppThemeProvider";

export default function Home() {
  return (
    <AppThemeProvider>
      <AppLayout />
    </AppThemeProvider>
  );
}
