import type { NextConfig } from "next";


const nextConfig: NextConfig = {
    output: "export", // Позволяет экспортировать статические файлы
    basePath: "/lootster", // Укажите имя репозитория
    assetPrefix: "/lootster",
};

module.exports = nextConfig;