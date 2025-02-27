"use client";
import { Leaf, Heart, PhoneCall } from "lucide-react";
import Button from "@/ui/components/Button";
import SubtitleSection from "@/ui/components/SubtitleSection";
import TitleSection from "@/ui/components/TitleSection";
import CardMission from "@/ui/components/CardMission";
import CardFeature from "@/ui/components/CardFeature";
import CardPlan from "@/ui/components/CardPlan";
import Input from "@/ui/components/Input";
import ItemContact from "@/ui/components/ItemContact";
import Logo from "@/ui/components/Logo";
import HeaderSection from "@/ui/sections/HeaderSection";
import MissionSection from "@/ui/sections/MissionSection";
import FeatureSection from "@/ui/sections/FeatureSection";
import PlanSection from "@/ui/sections/PlanSection";

export default function Home() {
  return (
    <main>
      <HeaderSection />
      <MissionSection />
      <FeatureSection />
      <PlanSection />
      <div style={{ backgroundColor: "black" }}>
        <Logo light />
      </div>
      <Logo large />
      <TitleSection>Revolutionizing Waste Management</TitleSection>
      <SubtitleSection>
        Our mission is to transform organic waste into sustainable energy while
        reducing environmental impact through innovative biodigester technology.
      </SubtitleSection>
      <Button ghost={false}>
        Botão <Leaf />
      </Button>
      <Button ghost={true}>
        Botão <Leaf />
      </Button>
      <CardMission
        icon={<Heart />}
        title="Eco-Friendly Solution"
        description="Convert organic waste into renewable energy and nutrient-rich fertilizer, reducing landfill waste and greenhouse gas emissions."
      />
      <CardFeature
        icon={<Heart />}
        title="Eco-Friendly Solution"
        description="Convert organic waste into renewable energy and nutrient-rich fertilizer, reducing landfill waste and greenhouse gas emissions."
      />
      <CardPlan
        title="Starter"
        value="$2,999"
        description="Perfect for small farms and households"
        list={["item1", "item2", "item3", "item4", "item5", "item6"]}
        popular={true}
      />
      <CardPlan
        title="Starter"
        value="$2,999"
        description="Perfect for small farms and households"
        list={["item1", "item2", "item3", "item4", "item5", "item6"]}
        popular={false}
      />
      <Input
        name="name"
        placeholder="Seu Nome"
        // value={inputName}
        label="Nome"
        onChange={(e) => console.log(e.target.value)}
      />
      ,
      <Input
        name="message"
        placeholder="Mensagem"
        // value={inputMessage}
        label="Sua mensagem"
        isTextarea
        onChange={(e) => console.log(e.target.value)}
      />
      <ItemContact
        icon={<PhoneCall />}
        title="Call Us"
        info="+1 (555) 123-4567"
      />
    </main>
  );
}
