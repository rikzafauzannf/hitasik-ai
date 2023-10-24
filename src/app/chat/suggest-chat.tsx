import React from "react";
import CardSuggest from "@/components/cardsuggest";

const SuggestChat = () => {
  const suggestData = [
    {
      title: "Pemerintahan",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, id",
      listContent: [
        "Apa perbedaan antara urusan pilihan dan urusan wajib di Kota Tasikmalaya?",
        "Bagaimana saya bisa mengetahui urusan pilihan yang saat ini sedang dijalankan?",
        "Saya ingin tahu lebih banyak tentang profil Wali Kota Kota Tasikmalaya. Apa visi dan misinya?",
      ],
      icons: "/icons/pemerintahan.svg",
    },
    {
      title: "Selayang Pandang",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, id",
      listContent: [
        "Bagaimana gambaran umum tentang geografi Kota Tasikmalaya? Apa yang membuatnya unik?",
        "Apakah ada statistik terkait pertumbuhan ekonomi di kota ini?",
        "Apa pencapaian kunci yang telah dicapai oleh Wali Kota sebelumnya?",
      ],
      icons: "/icons/selayangpandang.svg",
    },
    {
      title: "Layanan Publik",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, id",
      listContent: [
        "Bagaimana saya bisa mendapatkan akses ke data terbuka melalui Satu Data?",
        "Apa layanan ATCS, dan bagaimana hal itu meningkatkan transportasi di kota ini",
        "Bagaimana cara mengajukan permohonan informasi publik di Kota Tasikmalaya?",
      ],
      icons: "/icons/layananpublik.svg",
    },
    {
      title: "Open Data",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, id",
      listContent: [
        "Bagaimana cara saya bisa mengakses data terbuka di Kota Tasikmalaya?",
        "Apa jenis data yang tersedia dalam program Open Data Kota Tasikmalaya?",
        "Apa yang diizinkan dan apa yang tidak diizinkan dalam penggunaan data ini?",
      ],
      icons: "/icons/opendata.svg",
    },
    {
      title: "Sarana Prasarana",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, id",
      listContent: [
        "Di mana saya bisa menemukan informasi tentang rumah sakit di Kota Tasikmalaya?",
        "Bagaimana saya bisa menemukan tempat-tempat makan enak di Kota Tasikmalaya?",
        "Bagaimana saya bisa mendapatkan informasi tentang klub olahraga atau acara olahraga di kota ini?",
      ],
      icons: "/icons/saranaprasarana.svg",
    },
  ];

  return (
    <>
      <div className="my-6 w-full">
        <p className="text-center text-lg font-semibold my-3">
          Silahkan Pilih Topik Dengan Kebutuhan Infomasi Kamu
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {suggestData.map((item) => (
            <CardSuggest
              key={item.title}
              title={item.title}
              // description={item.description}
              listcontent={item.listContent.join("\n")}
              iconsMe={item.icons}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SuggestChat;
