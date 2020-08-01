// Node Modules
import { path as ROOT_DIR } from "app-root-path";
import { resolve } from "path";

// Export
export const SRC_DIR = resolve(ROOT_DIR, "src");
export const DIST_DIR = resolve(ROOT_DIR, "dist");
export const BUILD_DIR = resolve(ROOT_DIR, "build");
export const TEMPLATE = resolve(ROOT_DIR, "src/template/index.html");
