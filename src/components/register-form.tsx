import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RegisterForm({
  className,
  onToggle,
  ...props
}: React.ComponentProps<"div"> & { onToggle: () => void }) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
    <Card>
      <CardHeader className="text-center relative">
        <button
        type="button"
        aria-label="Volver al login"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
        onClick={(e) => {
          e.preventDefault();
          onToggle();
        }}
        >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        </button>
        <CardTitle className="text-xl">Regístrate</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
        <div className="grid gap-6">
          <div className="grid gap-6">
            <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
            </div>
            <div className="grid gap-3">
            <div className="flex items-center">
              <Label htmlFor="password">Contraseña</Label>
            </div>
            <Input id="password" type="password" required />
            <div className="flex items-center">
              <Label htmlFor="confirm-password">Confirmar contraseña</Label>
            </div>
            <Input id="confirm-password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
            Registrarse
            </Button>
          </div>
        </div>
        </form>
      </CardContent>
    </Card>
    </div>
  );
}
