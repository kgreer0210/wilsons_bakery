"use client";
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          title: "group-[.toast]:text-foreground group-[.toast]:font-semibold",
          description: "group-[.toast]:text-black group-[.toast]:font-medium",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          success:
            "group-[.toast]:bg-blue-600 group-[.toast]:text-white group-[.toast]:border-blue-700",
          error:
            "group-[.toast]:bg-red-600 group-[.toast]:text-white group-[.toast]:border-red-700",
          info: "group-[.toast]:bg-sky-600 group-[.toast]:text-white group-[.toast]:border-sky-700",
          warning:
            "group-[.toast]:bg-amber-600 group-[.toast]:text-white group-[.toast]:border-amber-700",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
