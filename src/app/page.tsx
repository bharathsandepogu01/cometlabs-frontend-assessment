import AppLayout from "@/components/AppLayout";
import AppThemeProvider from "@/components/AppThemeProvider";

export default function Home(): JSX.Element {
  return (
    <AppThemeProvider>
      <AppLayout />
    </AppThemeProvider>
  );
}
