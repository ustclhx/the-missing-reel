
/**
 * 处理资源的 public 路径
 * 在 production 环境下（GitHub Pages），会自动添加 base 路径
 */
export const getAssetPath = (path: string) => {
    // 如果是完整的 URL（如来自外部网站的纹理），直接返回
    if (path.startsWith('http') || path.startsWith('data:')) {
        return path;
    }

    // 移除开头的斜杠，避免双重斜杠
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // import.meta.env.BASE_URL 会根据 vite.config.ts 中的 base 配置自动变化
    // 开发环境是 '/'，生产环境是 '/the-missing-reel/'
    return `${import.meta.env.BASE_URL}${cleanPath}`;
};
