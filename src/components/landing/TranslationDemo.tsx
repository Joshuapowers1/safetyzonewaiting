import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Check, AlertTriangle } from 'lucide-react';
import { FadeInSection } from '@/components/ui/fade-in-section';
import { GradientText } from '@/components/ui/gradient-text';
import { AnimatedBadge } from '@/components/ui/animated-badge';
import { ScrambleText } from '@/components/ui/scramble-text';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
];

type LangCode = 'en' | 'es' | 'ja' | 'ar' | 'fr' | 'zh';

const allergenItems: Record<LangCode, { name: string; desc: string; safe: boolean }[]> = {
  en: [
    { name: 'Dairy', desc: 'Milk, cheese, butter, cream', safe: false },
    { name: 'Tree Nuts', desc: 'Almonds, cashews, walnuts', safe: false },
    { name: 'Gluten-Free', desc: 'No wheat, barley, or rye', safe: true },
    { name: 'Shellfish', desc: 'Shrimp, crab, lobster', safe: true },
  ],
  es: [
    { name: 'Lácteos', desc: 'Leche, queso, mantequilla, crema', safe: false },
    { name: 'Frutos Secos', desc: 'Almendras, anacardos, nueces', safe: false },
    { name: 'Sin Gluten', desc: 'Sin trigo, cebada ni centeno', safe: true },
    { name: 'Mariscos', desc: 'Camarones, cangrejo, langosta', safe: true },
  ],
  ja: [
    { name: '乳製品', desc: '牛乳、チーズ、バター、クリーム', safe: false },
    { name: 'ナッツ類', desc: 'アーモンド、カシューナッツ、くるみ', safe: false },
    { name: 'グルテンフリー', desc: '小麦、大麦、ライ麦なし', safe: true },
    { name: '甲殻類', desc: 'エビ、カニ、ロブスター', safe: true },
  ],
  ar: [
    { name: 'منتجات الألبان', desc: 'حليب، جبن، زبدة، كريمة', safe: false },
    { name: 'المكسرات', desc: 'لوز، كاجو، جوز', safe: false },
    { name: 'خالي من الغلوتين', desc: 'بدون قمح أو شعير أو جاودار', safe: true },
    { name: 'المحار', desc: 'جمبري، سلطعون، كركند', safe: true },
  ],
  fr: [
    { name: 'Produits Laitiers', desc: 'Lait, fromage, beurre, crème', safe: false },
    { name: 'Fruits à Coque', desc: 'Amandes, noix de cajou, noix', safe: false },
    { name: 'Sans Gluten', desc: 'Sans blé, orge ni seigle', safe: true },
    { name: 'Fruits de Mer', desc: 'Crevettes, crabe, homard', safe: true },
  ],
  zh: [
    { name: '乳制品', desc: '牛奶、奶酪、黄油、奶油', safe: false },
    { name: '坚果类', desc: '杏仁、腰果、核桃', safe: false },
    { name: '无麸质', desc: '不含小麦、大麦或黑麦', safe: true },
    { name: '贝类', desc: '虾、蟹、龙虾', safe: true },
  ],
};

const TranslationDemo = () => {
  const [activeLang, setActiveLang] = useState<LangCode>('en');
  const [scrambleKey, setScrambleKey] = useState(0);

  const handleLangChange = (code: LangCode) => {
    if (code === activeLang) return;
    setActiveLang(code);
    setScrambleKey((prev) => prev + 1);
  };

  const items = allergenItems[activeLang];

  return (
    <section className="py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <FadeInSection className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedBadge className="mb-4">
            <Globe className="w-3.5 h-3.5" />
            Live Demo
          </AnimatedBadge>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Your allergen card,{' '}
            <GradientText className="italic font-bold">any language</GradientText>
          </h2>
          <p className="text-lg text-muted-foreground">
            Your QR Allergen Card translates your dietary needs into 200+ languages so restaurant staff worldwide can keep you safe.
          </p>
        </FadeInSection>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Language selector */}
            <div className="md:col-span-2">
              <FadeInSection direction="left" delay={0.1}>
                <div className="bg-card border border-border rounded-2xl p-4 space-y-2">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium px-2 mb-3">Select Language</p>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangChange(lang.code as LangCode)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left ${
                        activeLang === lang.code
                          ? 'bg-primary/10 border border-primary/30 text-foreground'
                          : 'hover:bg-muted text-muted-foreground'
                      }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span className="font-medium text-sm">{lang.name}</span>
                      {activeLang === lang.code && (
                        <motion.div layoutId="lang-indicator" className="ml-auto">
                          <Check className="w-4 h-4 text-primary" />
                        </motion.div>
                      )}
                    </button>
                  ))}
                </div>
              </FadeInSection>
            </div>

            {/* Menu card */}
            <div className="md:col-span-3">
              <FadeInSection direction="right" delay={0.2}>
                <div className="bg-card border border-border rounded-2xl overflow-hidden relative">
                  {/* Scan progress bar */}
                  <motion.div
                    key={scrambleKey}
                    className="absolute top-0 left-0 h-[2px] bg-primary"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-semibold text-foreground">QR Allergen Card</h3>
                      <span className="text-xs text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {languages.find((l) => l.code === activeLang)?.flag} {languages.find((l) => l.code === activeLang)?.name}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <AnimatePresence mode="wait">
                        {items.map((item, i) => (
                          <motion.div
                            key={`${activeLang}-${i}`}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.3 }}
                            className={`flex items-start justify-between p-4 rounded-xl border ${
                              item.safe ? 'border-border bg-background' : 'border-destructive/30 bg-destructive/5'
                            }`}
                          >
                            <div className="flex-1">
                              <div className="font-medium text-foreground">
                                <ScrambleText key={`${scrambleKey}-${i}`} text={item.name} duration={600} />
                              </div>
                              <div className="text-sm text-muted-foreground mt-1">
                                <ScrambleText key={`${scrambleKey}-desc-${i}`} text={item.desc} duration={800} />
                              </div>
                            </div>
                            <div className="ml-3 mt-1">
                              {item.safe ? (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 0.4 + i * 0.1, type: 'spring', stiffness: 300 }}
                                >
                                  <Check className="w-5 h-5 text-primary" />
                                </motion.div>
                              ) : (
                                <motion.div
                                  initial={{ scale: 0, rotate: -10 }}
                                  animate={{ scale: 1, rotate: 0 }}
                                  transition={{ delay: 0.4 + i * 0.1, type: 'spring', stiffness: 300 }}
                                >
                                  <AlertTriangle className="w-5 h-5 text-destructive" />
                                </motion.div>
                              )}
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TranslationDemo;
