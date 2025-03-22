import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, TrendingDown, BarChart4, PieChart as PieChartIcon, Activity, DollarSign, ShoppingCart, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";

// Sample sales data for different time periods
const salesData = [
  { name: "Jan", sales: 4000, target: 3000, profit: 2400 },
  { name: "Feb", sales: 3000, target: 3200, profit: 1398 },
  { name: "Mar", sales: 9800, target: 3500, profit: 3800 },
  { name: "Apr", sales: 3908, target: 3700, profit: 2000 },
  { name: "May", sales: 4800, target: 4000, profit: 2181 },
  { name: "Jun", sales: 5800, target: 4100, profit: 2500 },
  { name: "Jul", sales: 6000, target: 4300, profit: 2100 },
];

// Sample product category data
const categoryData = [
  { name: "Electronics", value: 35 },
  { name: "Clothing", value: 25 },
  { name: "Home", value: 20 },
  { name: "Beauty", value: 15 },
  { name: "Other", value: 5 },
];

// Category colors
const COLORS = ['#047857', '#10B981', '#34D399', '#6EE7B7', '#A7F3D0'];

const SalesAnalyticsDashboard = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();
  const [timeRange, setTimeRange] = useState("monthly");
  
  // Metrics with comparison to previous period
  const metrics = [
    { 
      title: t('previews.dashboard.totalSales'), 
      value: "$42,390", 
      change: "+12.3%", 
      trend: "up",
      icon: <DollarSign className="h-4 w-4" />
    },
    { 
      title: t('previews.dashboard.averageOrder'), 
      value: "$124.50", 
      change: "+3.8%", 
      trend: "up",
      icon: <ShoppingCart className="h-4 w-4" />
    },
    { 
      title: t('previews.dashboard.totalCustomers'), 
      value: "1,241", 
      change: "-2.5%", 
      trend: "down",
      icon: <Users className="h-4 w-4" />
    },
    { 
      title: t('previews.dashboard.conversion'), 
      value: "24.8%", 
      change: "+5.1%", 
      trend: "up",
      icon: <Activity className="h-4 w-4" />
    },
  ];

  // AI insights based on the data
  const aiInsights = [
    t('previews.dashboard.insights.seasonal'),
    t('previews.dashboard.insights.categoryGrowth'),
    t('previews.dashboard.insights.customerBehavior')
  ];

  return (
    <div className="bg-black bg-opacity-90 rounded-lg overflow-hidden border border-mint/10 p-4">
      <Card className="bg-forest border-mint/10">
        <CardHeader className={`flex ${isRTL ? 'flex-row-reverse' : 'flex-row'} justify-between items-center pb-2`}>
          <CardTitle className="text-xl flex items-center">
            <BarChart4 className="w-5 h-5 text-mint mr-2" /> 
            {t('previews.dashboard.title')}
          </CardTitle>
          <div className="flex items-center gap-2">
            <Select 
              defaultValue={timeRange} 
              onValueChange={setTimeRange}
            >
              <SelectTrigger className="w-32 h-8 bg-forest-light border-mint/20 text-sm">
                <SelectValue placeholder={t('previews.dashboard.timeRange')} />
              </SelectTrigger>
              <SelectContent className="bg-forest border-mint/20">
                <SelectItem value="daily">{t('previews.dashboard.timeRanges.daily')}</SelectItem>
                <SelectItem value="weekly">{t('previews.dashboard.timeRanges.weekly')}</SelectItem>
                <SelectItem value="monthly">{t('previews.dashboard.timeRanges.monthly')}</SelectItem>
                <SelectItem value="yearly">{t('previews.dashboard.timeRanges.yearly')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          {/* Key Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            {metrics.map((metric, index) => (
              <div key={index} className="bg-forest-light rounded-lg p-3 border border-mint/5">
                <div className="flex items-center justify-between mb-1">
                  <div className="text-sm text-white/70">{metric.title}</div>
                  <div className="bg-mint/10 p-1 rounded-md">
                    {metric.icon}
                  </div>
                </div>
                <div className="text-xl font-bold">{metric.value}</div>
                <div className={`text-xs flex items-center mt-1 ${metric.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                  {metric.trend === 'up' ? 
                    <TrendingUp className="w-3 h-3 mr-1" /> : 
                    <TrendingDown className="w-3 h-3 mr-1" />
                  }
                  {metric.change} {t('previews.dashboard.sinceLast')}
                </div>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <Tabs defaultValue="sales" className="w-full">
            <TabsList className="bg-forest-light mb-4">
              <TabsTrigger value="sales" className="data-[state=active]:bg-mint data-[state=active]:text-forest">
                {t('previews.dashboard.tabs.sales')}
              </TabsTrigger>
              <TabsTrigger value="products" className="data-[state=active]:bg-mint data-[state=active]:text-forest">
                {t('previews.dashboard.tabs.products')}
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="sales" className="mt-0">
              <div className="bg-forest-light rounded-lg p-4 border border-mint/5 h-72">
                <ChartContainer config={{
                  sales: { theme: { light: "#047857", dark: "#047857" } },
                  target: { theme: { light: "#10B981", dark: "#10B981" } },
                }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1f2e29" />
                      <XAxis 
                        dataKey="name" 
                        stroke="#64748b"
                        reversed={isRTL}
                      />
                      <YAxis stroke="#64748b" />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line 
                        type="monotone" 
                        dataKey="sales" 
                        stroke="#047857" 
                        activeDot={{ r: 8 }} 
                        strokeWidth={3}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="target" 
                        stroke="#10B981" 
                        strokeDasharray="5 5" 
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </TabsContent>
            
            <TabsContent value="products" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-forest-light rounded-lg p-4 border border-mint/5 h-72">
                  <div className="font-medium mb-2 flex items-center">
                    <BarChart4 className="w-4 h-4 text-mint mr-2" />
                    {t('previews.dashboard.productPerformance')}
                  </div>
                  <ResponsiveContainer width="100%" height="90%">
                    <BarChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1f2e29" />
                      <XAxis 
                        dataKey="name" 
                        stroke="#64748b"
                        reversed={isRTL}
                      />
                      <YAxis stroke="#64748b" />
                      <ChartTooltip />
                      <Bar dataKey="profit" fill="#047857" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="bg-forest-light rounded-lg p-4 border border-mint/5 h-72">
                  <div className="font-medium mb-2 flex items-center">
                    <PieChartIcon className="w-4 h-4 text-mint mr-2" />
                    {t('previews.dashboard.categoryBreakdown')}
                  </div>
                  <ResponsiveContainer width="100%" height="85%">
                    <PieChart>
                      <Pie
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <ChartTooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* AI Insights Section */}
          <div className="mt-4">
            <div className="font-medium mb-2 flex items-center">
              <Badge className="bg-mint text-forest mr-2">AI</Badge>
              {t('previews.dashboard.aiInsightsTitle')}
            </div>
            <div className="bg-forest-light rounded-lg p-3 border border-mint/10">
              <ul className="space-y-2">
                {aiInsights.map((insight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="bg-mint/20 p-1 rounded flex-shrink-0 mt-0.5">
                      <Activity className="w-3 h-3 text-mint" />
                    </div>
                    <div className="text-sm text-white/80">{insight}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesAnalyticsDashboard;