"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function RegisterForm({
  className,
  onToggle,
  ...props
}: React.ComponentProps<"div"> & { onToggle: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handlePasswordChange = (value: string, isConfirm = false) => {
    if (isConfirm) {
      setConfirmPassword(value);
      setPasswordsMatch(password === value);
    } else {
      setPassword(value);
      setPasswordsMatch(confirmPassword === value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log("Email:", email);
      console.log("Contraseña:", password);
    }
  };

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
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M15 18l-6-6 6-6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <CardTitle className="text-xl">Regístrate</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Contraseña</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => handlePasswordChange(e.target.value)}
                  />
                  <div className="flex items-center">
                    <Label htmlFor="confirm-password">
                      Confirmar contraseña
                    </Label>
                  </div>
                  <Input
                    id="confirm-password"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => handlePasswordChange(e.target.value, true)}
                  />
                  {!passwordsMatch && confirmPassword !== "" && (
                    <p className="text-sm text-red-500">
                      Las contraseñas no coinciden
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={
                    !passwordsMatch || !password || !confirmPassword || !email
                  }
                >
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
