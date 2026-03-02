"use client"

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Settings,
  Share2,
  Edit3,
  FileText,
  Heart,
  Users,
  BookOpen,
  Mail,
  Globe,
  Twitter,
  Github,
  Linkedin,
  CalendarDays,
  Instagram,
  Youtube,
  ImageIcon,
  Bookmark,
  LayoutGrid,
  MapPin,
  ExternalLink,
} from "lucide-react";
const stats = [
  { label: "Публикации", value: "4", icon: FileText, color: "text-violet-400" },
  { label: "Подписчики", value: "1.2K", icon: Users, color: "text-sky-400" },
  { label: "Подписки", value: "89", icon: BookOpen, color: "text-emerald-400" },
  { label: "Лайки", value: "2.3K", icon: Heart, color: "text-rose-400" },
];


const skills = [
  "C", "Linux", "Bash", "Тестирование", "QA",
  "Автоматизация", "GDB", "Make"
];

const posts = [
  { id: 1, title: "Основы тестирования в Linux-среде", date: "15 фев 2026", likes: 340, comments: 28, type: "article" },
  { id: 2, title: "Bash-скрипты для автоматизации тестов", date: "8 фев 2026", likes: 520, comments: 41, type: "article" },
  { id: 3, title: "Отладка C-кода с GDB: практические советы", date: "1 фев 2026", likes: 890, comments: 67, type: "article" },
  { id: 4, title: "Чек-лист для ручного тестирования API", date: "22 янв 2026", likes: 210, comments: 19, type: "document" },
];

interface Post {
  type: "article" | "media" | "document";
  date: string;
  title: string;
  likes: number;
  comments: number;
}

function PostCard({ post }: { post: Post }) {
  return (
    <Card className="bg-zinc-900/60 border-zinc-800 hover:border-zinc-600 transition-all duration-300 hover:shadow-lg hover:shadow-violet-900/10 group cursor-pointer">
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Badge
                variant="outline"
                className={`text-xs border-0 px-2 py-0.5 font-medium ${
                  post.type === "article" ? "bg-violet-500/15 text-violet-400" :
                  post.type === "media" ? "bg-sky-500/15 text-sky-400" :
                  "bg-amber-500/15 text-amber-400"
                }`}
              >
                {post.type === "article" ? "Статья" : post.type === "media" ? "Медиа" : "Документ"}
              </Badge>
              <span className="text-xs text-zinc-500">{post.date}</span>
            </div>
            <h3 className="text-zinc-100 font-semibold text-sm leading-snug group-hover:text-violet-300 transition-colors line-clamp-2">
              {post.title}
            </h3>
          </div>
          <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors shrink-0 mt-0.5" />
        </div>
        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-zinc-800">
          <span className="flex items-center gap-1.5 text-xs text-zinc-500">
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            {post.likes.toLocaleString()}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-zinc-500">
            <BookOpen className="w-3.5 h-3.5 text-sky-400" />
            {post.comments}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = posts.filter(p => {
    if (activeTab === "all") return true;
    if (activeTab === "media") return p.type === "media";
    if (activeTab === "documents") return p.type === "document";
    if (activeTab === "saved") return p.likes > 500;
    return true;
  });

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100" style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "linear-gradient(zinc 1px, transparent 1px), linear-gradient(90deg, #71717a 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative max-w-3xl mx-auto px-4 py-10 pb-0">
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="relative shrink-0">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-violet-500 to-sky-500 opacity-80 blur-[2px]" />
              <Avatar className="relative w-24 h-24 border-2 border-zinc-950">
                <AvatarImage src="https://api.dicebear.com/9.x/initials/svg?seed=QA" />
                <AvatarFallback className="bg-zinc-800 text-zinc-200 text-2xl font-bold">QA</AvatarFallback>
              </Avatar>
              <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-zinc-950" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h1 className="text-2xl font-bold tracking-tight text-white">Китаев Данила</h1>
                <Badge className="bg-violet-500/20 text-violet-300 border-violet-500/30 text-xs font-medium">QA</Badge>
              </div>
              <p className="text-zinc-400 text-sm mb-0.5">Тестировщик · C / Linux / Bash</p>
              <p className="text-zinc-500 text-sm mb-3 flex items-center gap-1.5">
                <span className="text-zinc-600">@</span>dkitaev
                <span className="mx-1 text-zinc-700">·</span>
                <MapPin className="w-3.5 h-3.5" /> Москва, Россия
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
                QA-инженер. Пишу на C, работаю в Linux, автоматизирую через Bash.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-5">
            <Button size="sm" className="bg-violet-600 hover:bg-violet-500 text-white gap-2 shadow-lg shadow-violet-900/30 h-8 text-xs font-medium">
              <Edit3 className="w-3.5 h-3.5" /> Редактировать профиль
            </Button>
            <Button size="sm" variant="outline" className="border-zinc-700 text-zinc-800 hover:bg-zinc-800 hover:text-white gap-2 h-8 text-xs font-medium">
              <Share2 className="w-3.5 h-3.5" /> Поделиться
            </Button>
            <Button size="sm" variant="ghost" className="text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 h-8 w-8 p-0">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {stats.map(({ label, value, icon: Icon, color }) => (
            <Card key={label} className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors">
              <CardContent className="p-4 flex flex-col items-center text-center gap-1.5">
                <Icon className={`w-4 h-4 ${color}`} />
                <span className="text-xl font-bold text-white tracking-tight">{value}</span>
                <span className="text-xs text-zinc-500 font-medium">{label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="bg-zinc-900/50 border-zinc-800 mb-8">
          <CardContent className="p-6">
            <h2 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-4">О себе</h2>

            <p className="text-zinc-300 text-sm leading-7 mb-5">
              Тестировщик по профессии. Пишу на C, вшаренный подросток в Linux и Bash. Занимаюсь ручным и автоматизированным тестированием, использую скрипты для регрессий и CI. Умею отлаживать C-код через GDB и настраивать окружение в терминале.
            </p>
            <div className="mb-5">
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider mb-3">Навыки</p>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <Badge key={skill} variant="outline" className="bg-zinc-800/60 border-zinc-700 text-zinc-300 text-xs hover:bg-zinc-700 cursor-default transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator className="bg-zinc-800 my-5" />

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { icon: Mail, label: "dkitaev@ddomain.com", href: "mailto:dkitaev@ddomain.com", color: "text-violet-400" },
                { icon: Globe, label: "dkitaev.com", href: "#", color: "text-sky-400" },
                { icon: Twitter, label: "@dkitaev", href: "#", color: "text-sky-400" },
                { icon: Github, label: "Kit-rid", href: "#", color: "text-zinc-400" },
                { icon: Linkedin, label: "in/dkitaev", href: "#", color: "text-sky-500" },
                { icon: CalendarDays, label: "На платформе с 2024", href: null, color: "text-zinc-500" },
              ].map(({ icon: Icon, label, href, color }) => (
                <div key={label} className="flex items-center gap-2.5 group">
                  <Icon className={`w-4 h-4 shrink-0 ${color}`} />
                  {href ? (
                    <a href={href} className="text-sm text-zinc-400 hover:text-violet-300 transition-colors truncate">{label}</a>
                  ) : (
                    <span className="text-sm text-zinc-500 truncate">{label}</span>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="bg-zinc-900 border border-zinc-800 p-1 h-auto w-full grid grid-cols-4 mb-6">
            {[
              { value: "all", label: "Все посты", icon: LayoutGrid },
              { value: "media", label: "Медиа", icon: ImageIcon },
              { value: "documents", label: "Документы", icon: FileText },
              { value: "saved", label: "Избранное", icon: Bookmark },
            ].map(({ value, label, icon: Icon }) => (
              <TabsTrigger
                key={value}
                value={value}
                className="flex items-center gap-1.5 text-xs data-[state=active]:bg-zinc-800 data-[state=active]:text-violet-300 text-zinc-500"
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {["all", "media", "documents", "saved"].map(tab => (
            <TabsContent key={tab} value={tab} className="mt-0">
              {filtered.length === 0 ? (
                <div className="text-center py-16 text-zinc-600">
                  <Bookmark className="w-8 h-8 mx-auto mb-3 opacity-40" />
                  <p className="text-sm">Нет публикаций в этой категории</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-3">
                  {filtered.map(post => <PostCard key={post.id} post={post as Post} />)}
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>

      </div>

      <footer className="border-t border-zinc-800/60 mt-10 bg-zinc-950/80 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-sky-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">i</span>
                </div>
                <span className="text-sm font-semibold text-zinc-300">inlink</span>
              </div>
              <Separator orientation="vertical" className="h-4 bg-zinc-800" />
              <span className="text-xs text-zinc-600">© 2026 inlink. Все права защищены.</span>
            </div>
            <div className="flex items-center gap-1 flex-wrap justify-center">
              {["О нас", "Поддержка", "Блог", "Вакансии"].map((link, i) => (
                <a key={link} href="#" className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors px-2">{link}</a>
              ))}
              <Separator orientation="vertical" className="h-3 bg-zinc-800 mx-1" />
              <a href="#" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors px-2">Конфиденциальность</a>
              <a href="#" className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors px-2">Условия</a>
            </div>
            <div className="flex items-center gap-1">
              {[Twitter, Github, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-7 h-7 flex items-center justify-center rounded-md text-zinc-600 hover:text-zinc-300 hover:bg-zinc-800 transition-all">
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}