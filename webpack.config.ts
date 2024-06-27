import * as path from "path";
import { Configuration } from "webpack";

const config: Configuration = {
  entry: "./src/index.ts", // Projenizin ana giriş noktası
  output: {
    path: path.resolve(__dirname, "dist"), // Çıktı dosyalarının yerleştirileceği klasör
    filename: "bundle.ts", // Oluşturulacak çıktı dosyasının adı
  },
  resolve: {
    extensions: [".ts", ".js"], // TypeScript ve JavaScript dosyalarını tanıması için gerekli ayar
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // TypeScript dosyalarını tanımak için
        use: "ts-loader", // ts-loader kullanarak TypeScript dosyalarını işlemek
        exclude: /node_modules/, // node_modules klasörü dışında olanları işleme
      },
      {
        test: /\.wasm$/, // WebAssembly dosyalarını tanımak için
        type: "webassembly/experimental", // WebAssembly dosyalarını işlemek için gerekli ayar
      },
    ],
  },
};

export default config;
