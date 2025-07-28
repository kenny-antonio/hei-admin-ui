// vite.config.ts
import react from "file:///C:/Etudes_HEI/PROJET1/hei-admin-ui/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import { defineConfig, loadEnv } from "file:///C:/Etudes_HEI/PROJET1/hei-admin-ui/node_modules/vite/dist/node/index.js";
import istanbul from "file:///C:/Etudes_HEI/PROJET1/hei-admin-ui/node_modules/vite-plugin-istanbul/dist/index.mjs";
import { nodePolyfills } from "file:///C:/Etudes_HEI/PROJET1/hei-admin-ui/node_modules/vite-plugin-node-polyfills/dist/index.js";
var __vite_injected_original_dirname = "C:\\Etudes_HEI\\PROJET1\\hei-admin-ui";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      react(),
      nodePolyfills({ include: ["crypto", "os", "path", "stream", "vm"] }),
      istanbul({
        requireEnv: false,
        cypress: true,
        include: "src/*",
        exclude: ["node_modules", "cypress", "src/**/*.cy.*"],
        extension: [".js", ".jsx", ".ts", ".tsx"]
      })
    ],
    define: {
      "process.env": env
    },
    optimizeDeps: {
      entries: ["cypress/**/*", "src/**/*"]
    },
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "./src")
      }
    },
    build: {
      outDir: "build",
      sourcemap: true,
      rollupOptions: {
        output: {
          sourcemap: false
        }
      }
    },
    server: {
      watch: {
        ignored: ["**/coverage/**"]
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxFdHVkZXNfSEVJXFxcXFBST0pFVDFcXFxcaGVpLWFkbWluLXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxFdHVkZXNfSEVJXFxcXFBST0pFVDFcXFxcaGVpLWFkbWluLXVpXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9FdHVkZXNfSEVJL1BST0pFVDEvaGVpLWFkbWluLXVpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7ZGVmaW5lQ29uZmlnLCBsb2FkRW52fSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IGlzdGFuYnVsIGZyb20gXCJ2aXRlLXBsdWdpbi1pc3RhbmJ1bFwiO1xuaW1wb3J0IHtub2RlUG9seWZpbGxzfSBmcm9tIFwidml0ZS1wbHVnaW4tbm9kZS1wb2x5ZmlsbHNcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoe21vZGV9KSA9PiB7XG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgXCJcIik7XG4gIHJldHVybiB7XG4gICAgcGx1Z2luczogW1xuICAgICAgcmVhY3QoKSxcbiAgICAgIG5vZGVQb2x5ZmlsbHMoe2luY2x1ZGU6IFtcImNyeXB0b1wiLCBcIm9zXCIsIFwicGF0aFwiLCBcInN0cmVhbVwiLCBcInZtXCJdfSksXG4gICAgICBpc3RhbmJ1bCh7XG4gICAgICAgIHJlcXVpcmVFbnY6IGZhbHNlLFxuICAgICAgICBjeXByZXNzOiB0cnVlLFxuICAgICAgICBpbmNsdWRlOiBcInNyYy8qXCIsXG4gICAgICAgIGV4Y2x1ZGU6IFtcIm5vZGVfbW9kdWxlc1wiLCBcImN5cHJlc3NcIiwgXCJzcmMvKiovKi5jeS4qXCJdLFxuICAgICAgICBleHRlbnNpb246IFtcIi5qc1wiLCBcIi5qc3hcIiwgXCIudHNcIiwgXCIudHN4XCJdLFxuICAgICAgfSksXG4gICAgXSxcbiAgICBkZWZpbmU6IHtcbiAgICAgIFwicHJvY2Vzcy5lbnZcIjogZW52LFxuICAgIH0sXG4gICAgb3B0aW1pemVEZXBzOiB7XG4gICAgICBlbnRyaWVzOiBbXCJjeXByZXNzLyoqLypcIiwgXCJzcmMvKiovKlwiXSxcbiAgICB9LFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgIFwiQFwiOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjXCIpLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGJ1aWxkOiB7XG4gICAgICBvdXREaXI6IFwiYnVpbGRcIixcbiAgICAgIHNvdXJjZW1hcDogdHJ1ZSxcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgc291cmNlbWFwOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzZXJ2ZXI6IHtcbiAgICAgIHdhdGNoOiB7XG4gICAgICAgIGlnbm9yZWQ6IFtcIioqL2NvdmVyYWdlLyoqXCJdLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdTLE9BQU8sV0FBVztBQUNsVCxPQUFPLFVBQVU7QUFDakIsU0FBUSxjQUFjLGVBQWM7QUFDcEMsT0FBTyxjQUFjO0FBQ3JCLFNBQVEscUJBQW9CO0FBSjVCLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUMsS0FBSSxNQUFNO0FBQ3RDLFFBQU0sTUFBTSxRQUFRLE1BQU0sUUFBUSxJQUFJLEdBQUcsRUFBRTtBQUMzQyxTQUFPO0FBQUEsSUFDTCxTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixjQUFjLEVBQUMsU0FBUyxDQUFDLFVBQVUsTUFBTSxRQUFRLFVBQVUsSUFBSSxFQUFDLENBQUM7QUFBQSxNQUNqRSxTQUFTO0FBQUEsUUFDUCxZQUFZO0FBQUEsUUFDWixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxTQUFTLENBQUMsZ0JBQWdCLFdBQVcsZUFBZTtBQUFBLFFBQ3BELFdBQVcsQ0FBQyxPQUFPLFFBQVEsT0FBTyxNQUFNO0FBQUEsTUFDMUMsQ0FBQztBQUFBLElBQ0g7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLGVBQWU7QUFBQSxJQUNqQjtBQUFBLElBQ0EsY0FBYztBQUFBLE1BQ1osU0FBUyxDQUFDLGdCQUFnQixVQUFVO0FBQUEsSUFDdEM7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxNQUN0QztBQUFBLElBQ0Y7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFdBQVc7QUFBQSxNQUNYLGVBQWU7QUFBQSxRQUNiLFFBQVE7QUFBQSxVQUNOLFdBQVc7QUFBQSxRQUNiO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNMLFNBQVMsQ0FBQyxnQkFBZ0I7QUFBQSxNQUM1QjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
