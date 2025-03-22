import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose } from "@/components/ui/drawer";
import { Search, PlusCircle, PackageCheck, AlertTriangle, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";

// Sample inventory data
const initialInventory = [
  { id: 1, name: "T-shirts", sku: "APP-TS-001", stock: 34, threshold: 10, status: "ok" },
  { id: 2, name: "Jeans", sku: "APP-JN-002", stock: 12, threshold: 15, status: "low" },
  { id: 3, name: "Hoodies", sku: "APP-HD-003", stock: 8, threshold: 20, status: "critical" },
  { id: 4, name: "Sneakers", sku: "APP-SN-004", stock: 45, threshold: 10, status: "ok" },
  { id: 5, name: "Socks", sku: "APP-SK-005", stock: 78, threshold: 25, status: "ok" }
];

const InventoryAIAssistant = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [inventory, setInventory] = useState(initialInventory);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<typeof inventory[0] | null>(null);
  const [aiSuggestion, setAiSuggestion] = useState("");

  // Filter inventory based on search term
  const filteredInventory = inventory.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Display AI suggestion for an item
  const getAiSuggestion = (item: typeof inventory[0]) => {
    if (item.status === "critical") {
      return t('previews.inventory.suggestions.critical', { name: item.name, count: 20 });
    } else if (item.status === "low") {
      return t('previews.inventory.suggestions.low', { name: item.name, count: 10 });
    } else {
      return t('previews.inventory.suggestions.ok', { name: item.name });
    }
  };

  // Open drawer with item details
  const openItemDetails = (item: typeof inventory[0]) => {
    setSelectedItem(item);
    setAiSuggestion(getAiSuggestion(item));
    setIsDrawerOpen(true);
  };

  // Render status badge
  const renderStatusBadge = (status: string) => {
    switch (status) {
      case "ok":
        return <Badge className="bg-green-600"><CheckCircle2 className="w-3 h-3 mr-1" /> {t('previews.inventory.status.ok')}</Badge>;
      case "low":
        return <Badge className="bg-amber-500"><AlertTriangle className="w-3 h-3 mr-1" /> {t('previews.inventory.status.low')}</Badge>;
      case "critical":
        return <Badge className="bg-red-500"><AlertTriangle className="w-3 h-3 mr-1" /> {t('previews.inventory.status.critical')}</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-black bg-opacity-90 rounded-lg overflow-hidden border border-mint/10 p-4">
      <Card className="bg-forest border-mint/10">
        <CardHeader className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} justify-between items-center`}>
          <CardTitle className="text-xl flex items-center">
            <PackageCheck className="w-5 h-5 text-mint mr-2" /> 
            {t('previews.inventory.title')}
          </CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="border-mint/20 text-mint hover:bg-mint/5">
              <PlusCircle className="w-4 h-4 mr-1" /> {t('previews.inventory.addItem')}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <Search className={`absolute top-3 ${isRTL ? 'right-3' : 'left-3'} h-4 w-4 text-mint`} />
            <Input 
              placeholder={t('previews.inventory.searchPlaceholder')}
              className={`bg-forest-light border-mint/10 pl-10 ${isRTL ? 'pr-10 pl-3' : ''}`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="mt-4 space-y-2">
            {filteredInventory.map(item => (
              <div 
                key={item.id}
                className="p-3 rounded-lg bg-forest-light border border-mint/5 hover:border-mint/20 transition-all cursor-pointer"
                onClick={() => openItemDetails(item)}
              >
                <div className={`flex ${isRTL ? 'flex-row-reverse' : ''} justify-between items-center`}>
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm text-white/70">{item.sku}</div>
                  </div>
                  <div className={`text-right ${isRTL ? 'text-left' : 'text-right'}`}>
                    <div className="font-bold">{item.stock} {t('previews.inventory.units')}</div>
                    <div className="mt-1">{renderStatusBadge(item.status)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Item Detail Drawer */}
      <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <DrawerContent className="bg-forest">
          <DrawerHeader>
            <DrawerTitle className="text-lg font-bold">
              {selectedItem?.name}
            </DrawerTitle>
            <DrawerDescription className="text-white/70">
              {selectedItem?.sku}
            </DrawerDescription>
          </DrawerHeader>
          <div className="px-4 py-2">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-forest-light p-3 rounded-lg text-center">
                <div className="text-sm text-white/70">{t('previews.inventory.currentStock')}</div>
                <div className="text-xl font-bold">{selectedItem?.stock}</div>
              </div>
              <div className="bg-forest-light p-3 rounded-lg text-center">
                <div className="text-sm text-white/70">{t('previews.inventory.threshold')}</div>
                <div className="text-xl font-bold">{selectedItem?.threshold}</div>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-white/70 text-sm mb-2">{t('previews.inventory.aiInsight')}</div>
              <div className="bg-mint/10 border border-mint/20 p-3 rounded-lg">
                <div className="flex items-start gap-2">
                  <div className="bg-mint/20 p-1 rounded mt-0.5">
                    <PackageCheck className="w-4 h-4 text-mint" />
                  </div>
                  <div className="text-sm">{aiSuggestion}</div>
                </div>
              </div>
            </div>
          </div>
          <DrawerFooter>
            <Button className="bg-mint hover:bg-mint/80 text-forest">
              {t('previews.inventory.restock')}
            </Button>
            <DrawerClose asChild>
              <Button variant="outline" className="border-white/20">
                {t('previews.inventory.close')}
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default InventoryAIAssistant;