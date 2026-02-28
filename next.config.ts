import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"], // Ключевая настройка!
  },
  // Другие ваши настройки (если есть)
};

export default nextConfig;