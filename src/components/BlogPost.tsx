import React from "react";
import { 
  Drawer, 
  DrawerContent, 
  DrawerClose
} from "@/components/ui/drawer";
import { X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/LanguageContext";

// Sample blog posts data with content for both languages
const blogPostsContent = {
  en: [
    {
      id: 1,
      title: "Leveraging AI in Small Business Applications",
      excerpt: "How small businesses can use AI to automate tasks and improve customer experience.",
      date: "May 15, 2023",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      content: `
        <h2>Leveraging AI in Small Business Applications</h2>
        
        <p>Artificial Intelligence (AI) is no longer just for tech giants and enterprise corporations. Small businesses are increasingly finding ways to implement AI solutions to automate tasks, improve customer experiences, and gain a competitive edge.</p>
        
        <h3>Accessible AI Tools for Small Businesses</h3>
        
        <p>Today's AI landscape offers numerous tools that are both affordable and user-friendly for small businesses:</p>
        
        <ul>
          <li><strong>Customer Service Automation</strong>: AI-powered chatbots can handle common customer inquiries 24/7, freeing up staff to focus on more complex issues.</li>
          <li><strong>Marketing Optimization</strong>: AI tools can analyze customer data to identify trends and preferences, helping businesses create more targeted marketing campaigns.</li>
          <li><strong>Inventory Management</strong>: Machine learning algorithms can predict inventory needs based on historical data, reducing overstocking and stockouts.</li>
          <li><strong>Content Creation</strong>: AI writing assistants can help generate blog posts, social media content, and product descriptions.</li>
        </ul>
        
        <h3>Implementing AI in Your Small Business</h3>
        
        <p>Starting with AI doesn't need to be overwhelming. Here's a simple approach to implementation:</p>
        
        <ol>
          <li><strong>Identify Pain Points</strong>: Look for areas in your business where automation could save time or improve service.</li>
          <li><strong>Start Small</strong>: Begin with one specific application of AI rather than trying to transform your entire business at once.</li>
          <li><strong>Measure Results</strong>: Track key metrics before and after implementing AI to quantify the impact.</li>
          <li><strong>Scale Gradually</strong>: As you become comfortable with AI tools, expand their use to other areas of your business.</li>
        </ol>
        
        <h3>Real-World Success Stories</h3>
        
        <p>A local bakery implemented an AI-powered order prediction system that reduced food waste by 30% and increased profitability. A boutique accounting firm used AI to automate data entry, freeing up accountants to focus on advisory services and growing their client base by 25% in one year.</p>
        
        <h3>Conclusion</h3>
        
        <p>AI is no longer the future—it's the present. Small businesses that embrace AI technologies stand to gain significant advantages in efficiency, customer satisfaction, and market competitiveness. The key is to start small, focus on specific problems, and scale as you see results.</p>
      `
    },
    {
      id: 2,
      title: "The Rise of Micro SaaS Applications",
      excerpt: "Why focused, single-purpose applications are changing the software landscape.",
      date: "April 22, 2023",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766",
      content: `
        <h2>The Rise of Micro SaaS Applications</h2>
        
        <p>The software-as-a-service (SaaS) industry is undergoing a significant transformation with the emergence of "micro SaaS" applications—focused, single-purpose tools that solve specific problems for niche markets.</p>
        
        <h3>What Makes Micro SaaS Different?</h3>
        
        <p>Unlike traditional SaaS platforms that aim to be comprehensive solutions, micro SaaS products:</p>
        
        <ul>
          <li><strong>Focus on a Single Problem</strong>: Rather than trying to be all things to all users, micro SaaS applications excel at solving one specific problem extremely well.</li>
          <li><strong>Target Niche Markets</strong>: They often address the needs of specific industries or user segments that larger platforms overlook.</li>
          <li><strong>Operate with Small Teams</strong>: Many successful micro SaaS businesses are run by solo founders or very small teams.</li>
          <li><strong>Prioritize Profitability</strong>: Instead of chasing rapid growth and venture capital, micro SaaS founders often focus on sustainable profitability from early stages.</li>
        </ul>
        
        <h3>Why Micro SaaS is Gaining Traction</h3>
        
        <p>Several factors contribute to the growing popularity of micro SaaS:</p>
        
        <ol>
          <li><strong>User Preference for Specialized Tools</strong>: Businesses increasingly prefer best-in-class solutions for specific functions rather than mediocre all-in-one platforms.</li>
          <li><strong>Lower Barriers to Entry</strong>: Cloud infrastructure, no-code/low-code tools, and SaaS-specific frameworks make it easier than ever to build and launch a micro SaaS product.</li>
          <li><strong>Sustainable Business Model</strong>: The subscription-based model provides predictable revenue that can support small teams without requiring massive scale.</li>
          <li><strong>Integration Capabilities</strong>: Modern API ecosystems allow micro SaaS products to plug into users' existing tech stacks.</li>
        </ol>
        
        <h3>Examples of Successful Micro SaaS</h3>
        
        <p>From specialized email verification services to niche project management tools for specific industries, micro SaaS applications are thriving across various sectors. For instance, a tool that helps restaurants optimize their delivery routes or a specialized CRM for independent financial advisors.</p>
        
        <h3>The Future of Micro SaaS</h3>
        
        <p>As businesses continue to seek specialized solutions and entrepreneurs look for sustainable business models, the micro SaaS trend is likely to accelerate. We can expect to see continued innovation in niche markets and potentially consolidation as successful micro SaaS products expand their feature sets or get acquired by larger platforms.</p>
      `
    },
    {
      id: 3,
      title: "Building Apps That Scale with Your Business",
      excerpt: "Design principles for creating applications that grow alongside your company.",
      date: "March 10, 2023",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      content: `
        <h2>Building Apps That Scale with Your Business</h2>
        
        <p>Creating applications that can grow alongside your business is essential for long-term success. Scalable apps avoid the need for complete rewrites as your user base expands or your business requirements evolve.</p>
        
        <h3>Key Principles for Scalable App Design</h3>
        
        <p>When designing applications that scale effectively, consider these foundational principles:</p>
        
        <ul>
          <li><strong>Modular Architecture</strong>: Break your application into independent modules that can be developed, tested, and scaled separately.</li>
          <li><strong>API-First Design</strong>: Design robust APIs between components, allowing for easier integration and future expansion.</li>
          <li><strong>Cloud-Native Approach</strong>: Leverage cloud services for automatic scaling, load balancing, and geographic distribution.</li>
          <li><strong>Database Scalability</strong>: Choose database technologies that can handle increased load and data volume without major restructuring.</li>
          <li><strong>Asynchronous Processing</strong>: Use message queues and background jobs for operations that don't need immediate processing.</li>
        </ul>
        
        <h3>Technical Considerations for Growth</h3>
        
        <ol>
          <li><strong>Performance Monitoring</strong>: Implement comprehensive monitoring from day one to identify bottlenecks early.</li>
          <li><strong>Caching Strategies</strong>: Use multi-level caching to reduce database load and improve response times.</li>
          <li><strong>Horizontal vs. Vertical Scaling</strong>: Design to scale out (adding more machines) rather than just up (adding more resources to existing machines).</li>
          <li><strong>Infrastructure as Code</strong>: Automate infrastructure provisioning to ensure consistency and enable rapid scaling.</li>
        </ol>
        
        <h3>Business Considerations</h3>
        
        <p>Technical scalability is only part of the equation. Also consider:</p>
        
        <ul>
          <li><strong>Flexible Pricing Models</strong>: Design your application with multi-tiered pricing in mind from the start.</li>
          <li><strong>User Onboarding</strong>: Create onboarding processes that work for both individual users and enterprise teams.</li>
          <li><strong>Documentation</strong>: Scale your documentation alongside your product to support diverse user needs.</li>
          <li><strong>Customer Support</strong>: Build support systems that can scale from dozens to thousands of users.</li>
        </ul>
        
        <h3>Case Study: From Startup to Enterprise</h3>
        
        <p>Consider the journey of a project management tool that started with basic task tracking for small teams. By following scalable design principles, they were able to gradually add features like team hierarchies, advanced reporting, and enterprise SSO without rewriting their core application. Their database design anticipated future growth, allowing them to scale from hundreds to millions of tasks without performance degradation.</p>
        
        <h3>Conclusion</h3>
        
        <p>Building applications that scale with your business requires foresight and discipline. By adopting scalable architectural patterns, embracing cloud technologies, and planning for both technical and business growth, you can create applications that support your business for years to come rather than becoming technical debt that holds you back.</p>
      `
    }
  ],
  he: [
    {
      id: 1,
      title: "ניצול בינה מלאכותית ביישומים לעסקים קטנים",
      excerpt: "כיצד עסקים קטנים יכולים להשתמש בבינה מלאכותית לאוטומציה של משימות ושיפור חוויית הלקוח.",
      date: "15 במאי, 2023",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      content: `
        <h2>ניצול בינה מלאכותית ביישומים לעסקים קטנים</h2>
        
        <p>בינה מלאכותית (AI) אינה עוד רק עבור ענקיות טכנולוגיה ותאגידים גדולים. עסקים קטנים מוצאים יותר ויותר דרכים ליישם פתרונות בינה מלאכותית לאוטומציה של משימות, שיפור חוויית הלקוחות, והשגת יתרון תחרותי.</p>
        
        <h3>כלי בינה מלאכותית נגישים לעסקים קטנים</h3>
        
        <p>נוף הבינה המלאכותית של היום מציע כלים רבים שהם גם במחיר סביר וגם ידידותיים למשתמש עבור עסקים קטנים:</p>
        
        <ul>
          <li><strong>אוטומציה של שירות לקוחות</strong>: צ'אטבוטים מבוססי בינה מלאכותית יכולים לטפל בשאלות לקוחות נפוצות 24/7, ולשחרר את הצוות להתמקד בנושאים מורכבים יותר.</li>
          <li><strong>אופטימיזציה של שיווק</strong>: כלי בינה מלאכותית יכולים לנתח נתוני לקוחות כדי לזהות מגמות והעדפות, ולעזור לעסקים ליצור קמפיינים שיווקיים ממוקדים יותר.</li>
          <li><strong>ניהול מלאי</strong>: אלגוריתמים של למידת מכונה יכולים לחזות צרכי מלאי על סמך נתונים היסטוריים, להפחית עודף מלאי ומחסור.</li>
          <li><strong>יצירת תוכן</strong>: עוזרי כתיבה מבוססי בינה מלאכותית יכולים לעזור ליצור פוסטים בבלוג, תוכן למדיה חברתית, ותיאורי מוצרים.</li>
        </ul>
        
        <h3>יישום בינה מלאכותית בעסק הקטן שלך</h3>
        
        <p>התחלה עם בינה מלאכותית לא צריכה להיות מציפה. הנה גישה פשוטה ליישום:</p>
        
        <ol>
          <li><strong>זיהוי נקודות כאב</strong>: חפש אזורים בעסק שלך שבהם אוטומציה יכולה לחסוך זמן או לשפר שירות.</li>
          <li><strong>התחל קטן</strong>: התחל עם יישום ספציפי אחד של בינה מלאכותית במקום לנסות לשנות את כל העסק שלך בבת אחת.</li>
          <li><strong>מדידת תוצאות</strong>: עקוב אחר מדדים מרכזיים לפני ואחרי יישום בינה מלאכותית כדי לכמת את ההשפעה.</li>
          <li><strong>התרחבות הדרגתית</strong>: ככל שאתה מרגיש נוח יותר עם כלי בינה מלאכותית, הרחב את השימוש בהם לתחומים אחרים של העסק שלך.</li>
        </ol>
        
        <h3>סיפורי הצלחה מהעולם האמיתי</h3>
        
        <p>מאפייה מקומית יישמה מערכת חיזוי הזמנות מבוססת בינה מלאכותית שהפחיתה בזבוז מזון ב-30% והגדילה את הרווחיות. פירמת ראיית חשבון בוטיק השתמשה בבינה מלאכותית לאוטומציה של הזנת נתונים, שחררה את רואי החשבון להתמקד בשירותי ייעוץ והגדילה את בסיס הלקוחות שלהם ב-25% בשנה אחת.</p>
        
        <h3>סיכום</h3>
        
        <p>בינה מלאכותית אינה עוד העתיד - היא ההווה. עסקים קטנים המאמצים טכנולוגיות בינה מלאכותית עומדים להרוויח יתרונות משמעותיים ביעילות, שביעות רצון לקוחות, ותחרותיות בשוק. המפתח הוא להתחיל קטן, להתמקד בבעיות ספציפיות, ולהתרחב כשאתה רואה תוצאות.</p>
      `
    },
    {
      id: 2,
      title: "העלייה של יישומי Micro SaaS",
      excerpt: "מדוע יישומים ממוקדי מטרה משנים את נוף התוכנה.",
      date: "22 באפריל, 2023",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766",
      content: `
        <h2>העלייה של יישומי Micro SaaS</h2>
        
        <p>תעשיית התוכנה כשירות (SaaS) עוברת טרנספורמציה משמעותית עם הופעתם של יישומי "מיקרו SaaS" - כלים ממוקדי מטרה שפותרים בעיות ספציפיות לשווקי נישה.</p>
        
        <h3>מה הופך את Micro SaaS לשונה?</h3>
        
        <p>בניגוד לפלטפורמות SaaS מסורתיות ששואפות להיות פתרונות מקיפים, מוצרי מיקרו SaaS:</p>
        
        <ul>
          <li><strong>מתמקדים בבעיה אחת</strong>: במקום לנסות להיות הכל עבור כל המשתמשים, יישומי מיקרו SaaS מצטיינים בפתרון בעיה ספציפית אחת באופן מצוין.</li>
          <li><strong>מיועדים לשווקי נישה</strong>: הם לעתים קרובות מטפלים בצרכים של תעשיות ספציפיות או מגזרי משתמשים שפלטפורמות גדולות יותר מתעלמות מהם.</li>
          <li><strong>פועלים עם צוותים קטנים</strong>: עסקי מיקרו SaaS מצליחים רבים מנוהלים על ידי מייסדים בודדים או צוותים קטנים מאוד.</li>
          <li><strong>נותנים עדיפות לרווחיות</strong>: במקום לרדוף אחר צמיחה מהירה והון סיכון, מייסדי מיקרו SaaS לעתים קרובות מתמקדים ברווחיות בת קיימא משלבים מוקדמים.</li>
        </ul>
        
        <h3>מדוע Micro SaaS צובר תאוצה</h3>
        
        <p>מספר גורמים תורמים לפופולריות הגוברת של מיקרו SaaS:</p>
        
        <ol>
          <li><strong>העדפת משתמשים לכלים מתמחים</strong>: עסקים מעדיפים יותר ויותר פתרונות מובילים בקטגוריה לפונקציות ספציפיות במקום פלטפורמות בינוניות הכל-כלול.</li>
          <li><strong>חסמי כניסה נמוכים יותר</strong>: תשתית ענן, כלי no-code/low-code, ומסגרות ייעודיות ל-SaaS הופכים את הבנייה וההשקה של מוצר מיקרו SaaS לקלים יותר מאי פעם.</li>
          <li><strong>מודל עסקי בר-קיימא</strong>: המודל מבוסס המנויים מספק הכנסה צפויה שיכולה לתמוך בצוותים קטנים מבלי לדרוש קנה מידה עצום.</li>
          <li><strong>יכולות אינטגרציה</strong>: מערכות אקולוגיות מודרניות של API מאפשרות למוצרי מיקרו SaaS להשתלב במערכות הטכנולוגיות הקיימות של המשתמשים.</li>
        </ol>
        
        <h3>דוגמאות למיקרו SaaS מוצלח</h3>
        
        <p>משירותי אימות דוא"ל מתמחים ועד כלי ניהול פרויקטים לתעשיות ספציפיות, יישומי מיקרו SaaS משגשגים במגזרים שונים. למשל, כלי העוזר למסעדות לייעל את מסלולי המשלוח שלהן או CRM מתמחה ליועצים פיננסיים עצמאיים.</p>
        
        <h3>העתיד של מיקרו SaaS</h3>
        
        <p>כאשר עסקים ממשיכים לחפש פתרונות מתמחים ויזמים מחפשים מודלים עסקיים בני-קיימא, מגמת המיקרו SaaS צפויה להאיץ. אנו יכולים לצפות לראות המשך חדשנות בשווקי נישה ואולי קונסולידציה כאשר מוצרי מיקרו SaaS מצליחים מרחיבים את מערכי התכונות שלהם או נרכשים על ידי פלטפורמות גדולות יותר.</p>
      `
    },
    {
      id: 3,
      title: "בניית אפליקציות שצומחות עם העסק שלך",
      excerpt: "עקרונות עיצוב ליצירת אפליקציות שגדלות יחד עם החברה שלך.",
      date: "10 במרץ, 2023",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      content: `
        <h2>בניית אפליקציות שצומחות עם העסק שלך</h2>
        
        <p>יצירת אפליקציות שיכולות לגדול לצד העסק שלך היא חיונית להצלחה ארוכת טווח. אפליקציות מדרגיות נמנעות מהצורך בכתיבה מחדש מלאה כאשר בסיס המשתמשים שלך מתרחב או דרישות העסק שלך מתפתחות.</p>
        
        <h3>עקרונות מפתח לעיצוב אפליקציות מדרגיות</h3>
        
        <p>בעת תכנון אפליקציות שמדרגות ביעילות, שקול את העקרונות היסודיים הבאים:</p>
        
        <ul>
          <li><strong>ארכיטקטורה מודולרית</strong>: פרק את האפליקציה שלך למודולים עצמאיים שניתן לפתח, לבדוק ולהדרג בנפרד.</li>
          <li><strong>עיצוב API-תחילה</strong>: תכנן ממשקי API חזקים בין רכיבים, המאפשרים אינטגרציה קלה יותר והרחבה עתידית.</li>
          <li><strong>גישה מותאמת ענן</strong>: נצל שירותי ענן לדירוג אוטומטי, איזון עומסים, והפצה גיאוגרפית.</li>
          <li><strong>מדרגיות מסד נתונים</strong>: בחר טכנולוגיות מסד נתונים שיכולות להתמודד עם עומס וכמות נתונים מוגדלים ללא שינוי מבני משמעותי.</li>
          <li><strong>עיבוד אסינכרוני</strong>: השתמש בתורי הודעות ועבודות רקע לפעולות שאינן זקוקות לעיבוד מיידי.</li>
        </ul>
        
        <h3>שיקולים טכניים לצמיחה</h3>
        
        <ol>
          <li><strong>ניטור ביצועים</strong>: יישם ניטור מקיף מהיום הראשון כדי לזהות צווארי בקבוק מוקדם.</li>
          <li><strong>אסטרטגיות מטמון</strong>: השתמש במטמון רב-שכבתי כדי להפחית עומס על מסד הנתונים ולשפר זמני תגובה.</li>
          <li><strong>דירוג אופקי לעומת אנכי</strong>: תכנן לדרג החוצה (הוספת מכונות נוספות) ולא רק למעלה (הוספת משאבים נוספים למכונות קיימות).</li>
          <li><strong>תשתית כקוד</strong>: אוטומטיזציה של אספקת תשתית כדי להבטיח עקביות ולאפשר דירוג מהיר.</li>
        </ol>
        
        <h3>שיקולים עסקיים</h3>
        
        <p>מדרגיות טכנית היא רק חלק מהמשוואה. שקול גם:</p>
        
        <ul>
          <li><strong>מודלי תמחור גמישים</strong>: תכנן את האפליקציה שלך עם תמחור רב-שכבתי במחשבה מההתחלה.</li>
          <li><strong>קליטת משתמשים</strong>: צור תהליכי קליטה שעובדים גם עבור משתמשים בודדים וגם עבור צוותי ארגונים.</li>
          <li><strong>תיעוד</strong>: הדרג את התיעוד שלך לצד המוצר שלך כדי לתמוך בצרכי משתמשים מגוונים.</li>
          <li><strong>תמיכת לקוחות</strong>: בנה מערכות תמיכה שיכולות להדרג מעשרות לאלפי משתמשים.</li>
        </ul>
        
        <h3>מקרה בוחן: מסטארטאפ לארגון</h3>
        
        <p>שקול את המסע של כלי ניהול פרויקטים שהתחיל עם מעקב משימות בסיסי עבור צוותים קטנים. על ידי שמירה על עקרונות תכנון מדרגיים, הם הצליחו להוסיף בהדרגה תכונות כמו היררכיות צוות, דיווח מתקדם, ו-SSO ארגוני מבלי לכתוב מחדש את היישום הליבה שלהם. תכנון מסד הנתונים שלהם צפה צמיחה עתידית, מה שאפשר להם להדרג ממאות למיליוני משימות ללא ירידה בביצועים.</p>
        
        <h3>סיכום</h3>
        
        <p>בניית אפליקציות שמדרגות עם העסק שלך דורשת ראייה קדימה ומשמעת. על ידי אימוץ דפוסי ארכיטקטורה מדרגיים, אימוץ טכנולוגיות ענן, ותכנון לצמיחה הן טכנית והן עסקית, תוכל ליצור אפליקציות שתומכות בעסק שלך לשנים לבוא במקום להפוך לחוב טכני שמעכב אותך.</p>
      `
    }
  ]
};

// Function to get blog posts based on current language
const getBlogPosts = (lang: string) => {
  return lang === 'he' ? blogPostsContent.he : blogPostsContent.en;
};

interface BlogPostProps {
  isOpen: boolean;
  postId: number | null;
  onClose: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ isOpen, postId, onClose }) => {
  const { i18n } = useTranslation();
  const { isRTL } = useLanguage();
  
  const currentLanguage = i18n.language || 'en';
  const posts = getBlogPosts(currentLanguage);
  const post = postId ? posts.find(post => post.id === postId) : null;

  if (!post) return null;

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="h-[85vh] max-h-[85vh] overflow-y-auto bg-forest">
        <div className={`absolute ${isRTL ? 'left-4' : 'right-4'} top-4 z-10`}>
          <DrawerClose className="rounded-full p-2 bg-forest-light hover:bg-mint/20 text-white">
            <X className="h-4 w-4" />
          </DrawerClose>
        </div>
        
        <div className="px-6 py-10 md:px-10">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-48 object-cover rounded-lg mb-6"
          />
          <p className="text-mint text-sm mb-2">{post.date}</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{post.title}</h2>
          
          <div 
            className="prose prose-invert max-w-none prose-headings:text-mint prose-a:text-mint"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

// Export the blog posts function and component
export { BlogPost, getBlogPosts };