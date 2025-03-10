import React from 'react';
import { TripleSlideshow } from './MemberComponents/TripleSlideshow';
import memberCardsData from './MemberComponents/MemberCardsData.json';
import "../Translation";
import { useTranslation } from "react-i18next";



export const Member = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    const toggleLanguage = () => {
        const currentLanguage = i18n.language;
        const newLanguage = currentLanguage === "en" ? "sv" : "en";
        changeLanguage(newLanguage);
    };

    return (
        <div className="md:h-1/4 pb-10 lg:bg-header bg-cover h-screen" style={{ backgroundImage: `url(https://cdn.glitch.global/be758d61-a981-49f2-a7a6-72216e478708/jlz1000_88870_photo-realistic_image_of_a_gym_with_a_lounge_area_ec9e24eb-e19b-46e7-8449-97ca3e3d8892_upscayl_4x_realesrgan-x4plus-anime.png?v=1698691615805)` }}>
            <h1 className="text-4xl text-white md:text-4xl lg:text-6xl text-center mb-16 pt-9">{t("memberTitle1")}</h1>

            <TripleSlideshow data={memberCardsData} />
        </div>
    );
};

