import React, { useState } from "react";

const colorSchemes = {
  oceanTheme: {
    name: "Modern Ocean Theme",
    description: "Professional dan tenang, cocok untuk institusi pendidikan formal",
    colors: {
      primary: "#2B6CB0",
      secondary: "#4299E1",
      tertiary: "#63B3ED",
      accent: "#EBF8FF",
    },
  },
  trustTheme: {
    name: "Trust & Innovation Theme",
    description: "Menggabungkan kepercayaan dengan inovasi teknologi",
    colors: {
      primary: "#1A365D",
      secondary: "#2B4B8C",
      tertiary: "#4C6BC0",
      accent: "#E6F0FF",
    },
  },
  techTheme: {
    name: "Modern Tech Theme",
    description: "Cocok untuk kursus teknologi dan programming",
    colors: {
      primary: "#2D3748",
      secondary: "#4A5568",
      tertiary: "#718096",
      accent: "#F7FAFC",
    },
  },
  warmthTheme: {
    name: "Warmth Education Theme",
    description: "Hangat dan ramah, ideal untuk pendidikan anak dan kreativitas",
    colors: {
      primary: "#D03801",
      secondary: "#ED8936",
      tertiary: "#F6AD55",
      accent: "#FFFAF0",
    },
  },
  natureTheme: {
    name: "Nature Growth Theme",
    description: "Mewakili pertumbuhan dan pembelajaran berkelanjutan",
    colors: {
      primary: "#276749",
      secondary: "#48BB78",
      tertiary: "#68D391",
      accent: "#F0FFF4",
    },
  },
  purpleTheme: {
    name: "Purple Innovation Theme",
    description: "Modern dan inovatif, cocok untuk teknologi pendidikan",
    colors: {
      primary: "#553C9A",
      secondary: "#6B46C1",
      tertiary: "#9F7AEA",
      accent: "#FAF5FF",
    },
  },
  mindfulTheme: {
    name: "Mindful Learning Theme",
    description: "Menenangkan dan fokus, ideal untuk pembelajaran mendalam",
    colors: {
      primary: "#285E61",
      secondary: "#319795",
      tertiary: "#4FD1C5",
      accent: "#E6FFFA",
    },
  },
  creativityTheme: {
    name: "Creative Arts Theme",
    description: "Energetik dan kreatif, cocok untuk seni dan desain",
    colors: {
      primary: "#B7791F",
      secondary: "#ECC94B",
      tertiary: "#F6E05E",
      accent: "#FFFFF0",
    },
  },
};

const ColorSchemePreview = () => {
  const [selectedScheme, setSelectedScheme] = useState("oceanTheme");
  const scheme = colorSchemes[selectedScheme];

  // Komponen untuk menampilkan swatch warna
  const ColorSwatch = ({ color, name }) => (
    <div className="flex flex-col items-center mb-4">
      <div
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg shadow-md mb-2"
        style={{ backgroundColor: color }}
      />
      <span className="text-sm font-medium">{name}</span>
      <span className="text-xs text-gray-500">{color}</span>
    </div>
  );

  // Contoh komponen UI dengan warna yang diterapkan
  const UIExamples = ({ colors }) => (
    <div className="space-y-8">
      {/* Header Example */}
      <div className="rounded-t-lg overflow-hidden">
        <div className="p-4" style={{ backgroundColor: colors.primary }}>
          <div className="text-white flex flex-col sm:flex-row justify-between items-center">
            <span className="font-bold text-lg">Nobel Akademi</span>
            <div className="flex space-x-2 mt-2 sm:mt-0">
              <button
                className="px-3 py-1 rounded transition-colors duration-200 hover:opacity-90"
                style={{ backgroundColor: colors.secondary }}
              >
                Login
              </button>
              <button
                className="px-3 py-1 rounded transition-colors duration-200 hover:opacity-90"
                style={{ backgroundColor: colors.tertiary }}
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Card Example */}
      <div
        className="p-4 rounded-lg shadow-md"
        style={{ backgroundColor: colors.accent }}
      >
        <h3
          className="text-lg font-bold mb-2"
          style={{ color: colors.primary }}
        >
          Featured Course
        </h3>
        <p className="text-sm mb-4" style={{ color: colors.secondary }}>
          Pelajari keterampilan baru bersama instruktur ahli kami.
        </p>
        <button
          className="w-full py-2 rounded text-white transition-colors duration-200 hover:opacity-90"
          style={{ backgroundColor: colors.primary }}
        >
          Daftar Sekarang
        </button>
      </div>

      {/* Feature Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="p-4 rounded-lg shadow-sm"
            style={{ backgroundColor: colors.accent }}
          >
            <div
              className="w-10 h-10 rounded-full mb-2 flex items-center justify-center"
              style={{ backgroundColor: colors.tertiary }}
            >
              <span className="text-white">✓</span>
            </div>
            <h4 className="font-bold" style={{ color: colors.primary }}>
              Fitur {i}
            </h4>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div
        className="p-6 rounded-lg text-white text-center"
        style={{
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
        }}
      >
        <h3 className="text-xl font-bold mb-2">Mulai Belajar Hari Ini</h3>
        <p className="mb-4">
          Bergabunglah dengan ribuan pelajar di seluruh dunia
        </p>
        <button
          className="px-6 py-2 rounded transition-colors duration-200 hover:opacity-90"
          style={{ backgroundColor: "white", color: colors.primary }}
        >
          Mulai Sekarang
        </button>
      </div>

      {/* Form Example */}
      <div
        className="p-4 rounded-lg shadow-md"
        style={{ backgroundColor: colors.accent }}
      >
        <h4 className="font-bold mb-2" style={{ color: colors.primary }}>
          Formulir Kontak
        </h4>
        <form>
          <input
            type="text"
            placeholder="Nama Anda"
            className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2"
            style={{ borderColor: colors.secondary }}
          />
          <input
            type="email"
            placeholder="Email Anda"
            className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2"
            style={{ borderColor: colors.secondary }}
          />
          <textarea
            placeholder="Pesan"
            className="w-full p-2 mb-2 border rounded focus:outline-none focus:ring-2"
            style={{ borderColor: colors.secondary }}
            rows="3"
          ></textarea>
          <button
            className="w-full py-2 rounded text-white transition-colors duration-200 hover:opacity-90"
            style={{ backgroundColor: colors.primary }}
          >
            Kirim Pesan
          </button>
        </form>
      </div>

      {/* Alert Example */}
      <div
        className="p-4 rounded-lg shadow-md"
        style={{ backgroundColor: colors.accent }}
      >
        <div className="flex items-center">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
            style={{ backgroundColor: colors.tertiary }}
          >
            <span className="text-white font-bold">!</span>
          </div>
          <div>
            <h4 className="font-bold" style={{ color: colors.primary }}>
              Peringatan
            </h4>
            <p className="text-sm" style={{ color: colors.secondary }}>
              Ini adalah contoh alert peringatan.
            </p>
          </div>
        </div>
      </div>

      {/* Table Example */}
      <div className="overflow-x-auto">
        <table className="min-w-full border" style={{ backgroundColor: colors.accent }}>
          <thead>
            <tr style={{ backgroundColor: colors.secondary }}>
              <th className="py-2 px-4 border text-center" style={{ color: colors.accent }}>
                ID
              </th>
              <th className="py-2 px-4 border text-center" style={{ color: colors.accent }}>
                Nama
              </th>
              <th className="py-2 px-4 border text-center" style={{ color: colors.accent }}>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border text-center" style={{ color: colors.primary }}>
                1
              </td>
              <td className="py-2 px-4 border text-center" style={{ color: colors.primary }}>
                Alice
              </td>
              <td className="py-2 px-4 border text-center" style={{ color: colors.primary }}>
                Aktif
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border text-center" style={{ color: colors.primary }}>
                2
              </td>
              <td className="py-2 px-4 border text-center" style={{ color: colors.primary }}>
                Bob
              </td>
              <td className="py-2 px-4 border text-center" style={{ color: colors.primary }}>
                Tidak Aktif
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal Example (statik untuk demonstrasi) */}
      <div className="relative">
        <button
          className="px-4 py-2 rounded text-white transition-colors duration-200 hover:opacity-90"
          style={{ backgroundColor: colors.primary }}
          onClick={() => alert("Contoh modal terbuka")}
        >
          Buka Contoh Modal
        </button>
        <div
          className="mt-4 p-4 border rounded shadow-lg"
          style={{ backgroundColor: colors.accent }}
        >
          <h4 className="font-bold mb-2" style={{ color: colors.primary }}>
            Judul Modal
          </h4>
          <p className="mb-4" style={{ color: colors.secondary }}>
            Ini adalah contoh isi modal.
          </p>
          <div className="flex justify-end">
            <button
              className="px-4 py-2 rounded transition-colors duration-200 hover:opacity-90"
              style={{ backgroundColor: colors.tertiary, color: colors.accent }}
              onClick={() => alert("Modal Ditutup")}
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:p-8 max-w-screen-xl mx-auto">
      {/* Header Landing Page untuk Nobel Akademi */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">8 Pallet Warna Nobel Akademi</h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Pilih skema warna yang mewakili identitas visual Nobel Akademi dan rasakan tampilan profesional yang responsif.
        </p>
      </div>

      {/* Pemilih Skema Warna dengan Urutan Nomor */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Pilih Skema Warna</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(colorSchemes).map(([key, scheme], index) => (
            <button
              key={key}
              onClick={() => setSelectedScheme(key)}
              className={`p-4 rounded cursor-pointer transition-colors duration-200 hover:bg-blue-50 ${
                selectedScheme === key
                  ? "ring-2 ring-blue-500 bg-blue-50"
                  : "bg-gray-100"
              }`}
            >
              <div className="font-medium">
                {index + 1}. {scheme.name}
              </div>
              <div className="text-xs text-gray-600">{scheme.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Preview Skema dan Contoh UI */}
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
        <div className="mb-8 text-center">
          <h3 className="text-xl font-bold mb-2">{scheme.name}</h3>
          <p className="text-gray-600">{scheme.description}</p>
        </div>

        {/* Swatch Warna */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 justify-items-center">
          <ColorSwatch color={scheme.colors.primary} name="Primary" />
          <ColorSwatch color={scheme.colors.secondary} name="Secondary" />
          <ColorSwatch color={scheme.colors.tertiary} name="Tertiary" />
          <ColorSwatch color={scheme.colors.accent} name="Accent" />
        </div>

        {/* Contoh Komponen UI */}
        <div className="mb-8">
          <h4 className="font-bold mb-4 text-center">Contoh Penggunaan Komponen UI</h4>
          <UIExamples colors={scheme.colors} />
        </div>

        {/* CSS Variables */}
        <div className="mt-8">
          <h4 className="font-bold mb-2">CSS Variables:</h4>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
            {`:root {
  --primary: ${scheme.colors.primary};
  --secondary: ${scheme.colors.secondary};
  --tertiary: ${scheme.colors.tertiary};
  --accent: ${scheme.colors.accent};
}`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ColorSchemePreview;
