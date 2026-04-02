import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from "motion/react";
import { ArrowDown, Github, Instagram, Mail, Twitter, Phone, MapPin, MessageSquare, X, ArrowLeft } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";


const ProjectDetail = ({ project, onBack }: { project: any; onBack: () => void }) => {
  useEffect(() => {
    // Scroll to top when project is opened
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 1.05, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98, y: -10 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] bg-[#020202] overflow-y-auto scroll-smooth"
    >
      <motion.button
        onClick={onBack}
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="fixed top-12 left-12 z-[110] flex items-center gap-4 text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Works
      </motion.button>

      <div className="w-full">
        {/* Hero Section */}
        <section className="relative h-[80vh] w-full overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020202] to-transparent" />
          
          {/* Conditionally hide title/subtitle for Honda, AI Drawing, Easy Dentist, Mystery Circle, and Tao projects */}
          {!["01", "02", "03", "04", "05"].includes(project.id) && (
            <div className="absolute bottom-24 left-12 md:left-24">
              <motion.h1 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-7xl md:text-9xl font-serif tracking-tighter mb-6"
              >
                {project.title}
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl"
              >
                {project.subtitle || project.desc}
              </motion.p>
            </div>
          )}
        </section>

        {/* Content Section */}
        <section className="py-24 px-8 md:px-24 max-w-7xl mx-auto">
          {["01", "02", "03", "04", "05"].includes(project.id) ? (
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2
                  }
                }
              }}
              className="grid md:grid-cols-2 gap-x-12 gap-y-16"
            >
              {/* Project Specific Content - 2x2 Grid */}
              
              {/* Section 1: 项目背景 */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className={`space-y-6 group/item p-7 rounded-3xl border border-white/5 bg-white/[0.01] transition-all duration-700 ${
                  project.id === "01" ? "hover:bg-[#8165F2]/[0.03] hover:border-[#8165F2]/30" :
                  project.id === "02" ? "hover:bg-[#53C34D]/[0.03] hover:border-[#53C34D]/30" :
                  project.id === "03" ? "hover:bg-[#507AFD]/[0.03] hover:border-[#507AFD]/30" :
                  project.id === "04" ? "hover:bg-[#C08857]/[0.03] hover:border-[#C08857]/30" :
                  "hover:bg-[#EF312C]/[0.03] hover:border-[#EF312C]/30"
                }`}
              >
                <div className="space-y-2">
                  <span className={`text-[10px] uppercase tracking-[0.6em] text-zinc-600 font-mono block transition-colors ${
                    project.id === "01" ? "group-hover/item:text-[#8165F2]" :
                    project.id === "02" ? "group-hover/item:text-[#53C34D]" :
                    project.id === "03" ? "group-hover/item:text-[#507AFD]" :
                    project.id === "04" ? "group-hover/item:text-[#C08857]" :
                    "group-hover/item:text-[#EF312C]"
                  }`}>01</span>
                  <h3 className={`text-4xl font-serif text-white transition-colors ${
                    project.id === "01" ? "group-hover/item:text-[#8165F2]" :
                    project.id === "02" ? "group-hover/item:text-[#53C34D]" :
                    project.id === "03" ? "group-hover/item:text-[#507AFD]" :
                    project.id === "04" ? "group-hover/item:text-[#C08857]" :
                    "group-hover/item:text-[#EF312C]"
                  }`}>{project.id === "03" ? "项目背景与价值" : "项目背景"}</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed text-xl font-light group-hover/item:text-zinc-100 transition-colors duration-500">
                  {project.id === "01" ? (
                    "面向家庭用户的新新能源智能SUV，针对当前HMI系统存在的操作繁琐、信息过载、驾驶分心、人车信任不足等痛点，以本田「0系列」品牌理念为核心，打造兼顾驾驶安全、家庭需求与情感体验的新一代人车交互系统。"
                  ) : project.id === "02" ? (
                    "针对现有 APP 存在的操作效率低、信息层级混乱、品牌感知弱、用户体验割裂等痛点，围绕核心用户需求，完成从需求拆解到设计落地的全流程交互设计，打造更高效、更易用、更具品牌感的移动端产品体验。"
                  ) : project.id === "03" ? (
                    "在原有系统基础上，针对业务诉求繁杂、用户体验割裂、信息层级混乱、操作效率低下等核心痛点，进行全链路的体验设计与流程重构。核心目标：统一设计语言、提升操作效率、优化信息获取。"
                  ) : project.id === "04" ? (
                    "面向女性向用户的恋爱 + 解谜题材手游，围绕「都市悬疑 + 恋爱养成」核心玩法，打造一套完整的视觉设计体系，包括角色、场景、道具、UI 等全链路视觉资产，为玩家营造沉浸式的剧情体验与情感共鸣。"
                  ) : (
                    "为火锅品牌打造专属 IP 吉祥物「食小龍」，围绕火锅、美食、龙年、活力核心元素，设计兼具辨识度、亲和力与商业延展性的 IP 形象，赋能品牌营销、周边开发与用户互动，强化品牌记忆点。"
                  )}
                </p>
                <div className={`h-px w-0 group-hover/item:w-full bg-gradient-to-r transition-all duration-1000 ${
                  project.id === "01" ? "from-[#8165F2]/60 to-transparent" :
                  project.id === "02" ? "from-[#53C34D]/60 to-transparent" :
                  project.id === "03" ? "from-[#507AFD]/60 to-transparent" :
                  project.id === "04" ? "from-[#C08857]/60 to-transparent" :
                  "from-[#EF312C]/60 to-transparent"
                }`} />
              </motion.div>

              {/* Section 2: 项目亮点 */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className={`space-y-6 group/item p-7 rounded-3xl border border-white/5 bg-white/[0.01] transition-all duration-700 ${
                  project.id === "01" ? "hover:bg-[#8165F2]/[0.03] hover:border-[#8165F2]/30" :
                  project.id === "02" ? "hover:bg-[#53C34D]/[0.03] hover:border-[#53C34D]/30" :
                  project.id === "03" ? "hover:bg-[#507AFD]/[0.03] hover:border-[#507AFD]/30" :
                  project.id === "04" ? "hover:bg-[#C08857]/[0.03] hover:border-[#C08857]/30" :
                  "hover:bg-[#EF312C]/[0.03] hover:border-[#EF312C]/30"
                }`}
              >
                <div className="space-y-2">
                  <span className={`text-[10px] uppercase tracking-[0.6em] text-zinc-600 font-mono block transition-colors ${
                    project.id === "01" ? "group-hover/item:text-[#8165F2]" :
                    project.id === "02" ? "group-hover/item:text-[#53C34D]" :
                    project.id === "03" ? "group-hover/item:text-[#507AFD]" :
                    project.id === "04" ? "group-hover/item:text-[#C08857]" :
                    "group-hover/item:text-[#EF312C]"
                  }`}>02</span>
                  <h3 className={`text-4xl font-serif text-white transition-colors ${
                    project.id === "01" ? "group-hover/item:text-[#8165F2]" :
                    project.id === "02" ? "group-hover/item:text-[#53C34D]" :
                    project.id === "03" ? "group-hover/item:text-[#507AFD]" :
                    project.id === "04" ? "group-hover/item:text-[#C08857]" :
                    "group-hover/item:text-[#EF312C]"
                  }`}>{project.id === "01" ? "设计理念" : (project.id === "03" ? "核心设计理念" : (project.id === "04" ? "项目亮点" : (project.id === "05" ? "核心设计目标" : "核心设计目标")))}</h3>
                </div>
                <div className="space-y-6">
                  {project.id === "01" || project.id === "03" ? (
                    <>
                      <p className={`text-zinc-200 leading-relaxed text-xl font-medium tracking-tight transition-colors ${
                        project.id === "01" ? "group-hover/item:text-[#8165F2]" : "group-hover/item:text-[#507AFD]"
                      }`}>
                        {project.id === "01" ? "用新时代智能用户引领未来的「智慧与情感」" : "打造“统一、高效、清晰”的 B 端医疗设计体系"}
                      </p>
                      <div className="grid gap-3">
                        {(project.id === "01" ? [
                          { label: "直", desc: "由洞察的界面、高效的操作，带来沉浸式的沉浸体验" },
                          { label: "智", desc: "家庭之间，通过AI语音随心控制车内构件，通过HM融合分散的功能，统一进行控制" },
                          { label: "乐", desc: "设计能够快速抓住用户眼球，传递出乐趣、富有创意的情感" }
                        ] : [
                          { label: "统", desc: "统一 (Unity)：全局视觉规范、组件库、交互逻辑的标准化。" },
                          { label: "效", desc: "高效 (Efficiency)：聚焦核心任务，优化路径，提升业务处理速度。" },
                          { label: "清", desc: "清晰 (Clarity)：信息层级分明，数据展示直观，反馈及时明确。" }
                        ]).map((item, i) => (
                          <div key={i} className="flex gap-4 items-start group/phi">
                            <span className={`text-2xl font-serif text-white/10 transition-colors duration-500 ${
                              project.id === "01" ? "group-hover/item:text-[#8165F2]/40" : "group-hover/item:text-[#507AFD]/40"
                            }`}>{item.label}</span>
                            <p className="text-zinc-400 pt-1 group-hover/item:text-zinc-200 transition-colors duration-500 text-sm leading-relaxed font-light">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : project.id === "04" ? (
                    <div className="grid gap-4">
                      {[
                        { title: "风格统一", desc: "以「都市轻奢 + 悬疑质感」为核心视觉调性，全资产风格高度统一" },
                        { title: "情感化设计", desc: "角色塑造贴合女性向用户情感需求，强化恋爱氛围感" },
                        { title: "全链路覆盖", desc: "从前期策划到最终落地，完整覆盖游戏视觉设计全流程" }
                      ].map((goal, i) => (
                        <div key={i} className="space-y-1 group/goal">
                          <h4 className="text-zinc-200 text-lg font-medium group-hover/item:text-[#C08857] transition-colors">{goal.title}</h4>
                          <p className="text-zinc-500 text-sm leading-relaxed font-light group-hover/item:text-zinc-400 transition-colors">{goal.desc}</p>
                        </div>
                      ))}
                    </div>
                  ) : project.id === "05" ? (
                    <div className="grid gap-4">
                      {[
                        { title: "打造高辨识度 IP", desc: "造型可爱讨喜，贴合火锅品牌调性，易被用户记住" },
                        { title: "强化品牌关联性", desc: "IP 形象深度绑定火锅 / 美食属性，传递品牌文化" },
                        { title: "实现全场景延展", desc: "适配 3D 建模、场景应用、周边衍生品等多场景落地" }
                      ].map((goal, i) => (
                        <div key={i} className="space-y-1 group/goal">
                          <h4 className="text-zinc-200 text-lg font-medium group-hover/item:text-[#EF312C] transition-colors">{goal.title}</h4>
                          <p className="text-zinc-500 text-sm leading-relaxed font-light group-hover/item:text-zinc-400 transition-colors">{goal.desc}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid gap-4">
                      {[
                        { title: "提升操作效率", desc: "优化操作流程，减少用户操作步骤，降低学习成本" },
                        { title: "提升信息获取效率", desc: "梳理信息层级，优化内容布局，让用户快速获取关键信息" },
                        { title: "提升品牌感知", desc: "统一视觉语言，强化品牌识别，传递品牌价值" }
                      ].map((goal, i) => (
                        <div key={i} className="space-y-1 group/goal">
                          <h4 className={`text-zinc-200 text-lg font-medium transition-colors ${
                            project.id === "01" ? "group-hover/item:text-[#8165F2]" : "group-hover/item:text-[#53C34D]"
                          }`}>{goal.title}</h4>
                          <p className="text-zinc-500 text-sm leading-relaxed font-light group-hover/item:text-zinc-400 transition-colors">{goal.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className={`h-px w-0 group-hover/item:w-full bg-gradient-to-r transition-all duration-1000 ${
                  project.id === "01" ? "from-[#8165F2]/60 to-transparent" :
                  project.id === "02" ? "from-[#53C34D]/60 to-transparent" :
                  project.id === "03" ? "from-[#507AFD]/60 to-transparent" :
                  project.id === "04" ? "from-[#C08857]/60 to-transparent" :
                  "from-[#EF312C]/60 to-transparent"
                }`} />
              </motion.div>

              {/* Section 3: 项目成果 */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className={`space-y-6 group/item p-7 rounded-3xl border border-white/5 bg-white/[0.01] transition-all duration-700 ${
                  project.id === "01" ? "hover:bg-[#8165F2]/[0.03] hover:border-[#8165F2]/30" :
                  project.id === "02" ? "hover:bg-[#53C34D]/[0.03] hover:border-[#53C34D]/30" :
                  project.id === "03" ? "hover:bg-[#507AFD]/[0.03] hover:border-[#507AFD]/30" :
                  project.id === "04" ? "hover:bg-[#C08857]/[0.03] hover:border-[#C08857]/30" :
                  "hover:bg-[#EF312C]/[0.03] hover:border-[#EF312C]/30"
                }`}
              >
                <div className="space-y-2">
                  <span className={`text-[10px] uppercase tracking-[0.6em] text-zinc-600 font-mono block transition-colors ${
                    project.id === "01" ? "group-hover/item:text-[#8165F2]" :
                    project.id === "02" ? "group-hover/item:text-[#53C34D]" :
                    project.id === "03" ? "group-hover/item:text-[#507AFD]" :
                    project.id === "04" ? "group-hover/item:text-[#C08857]" :
                    "group-hover/item:text-[#EF312C]"
                  }`}>03</span>
                  <h3 className={`text-4xl font-serif text-white transition-colors ${
                    project.id === "01" ? "group-hover/item:text-[#8165F2]" :
                    project.id === "02" ? "group-hover/item:text-[#53C34D]" :
                    project.id === "03" ? "group-hover/item:text-[#507AFD]" :
                    project.id === "04" ? "group-hover/item:text-[#C08857]" :
                    "group-hover/item:text-[#EF312C]"
                  }`}>{project.id === "01" ? "核心设计目标" : (project.id === "03" || project.id === "04" || project.id === "05" ? "项目成果" : "二、设计调研")}</h3>
                </div>
                <div className="grid gap-4">
                  {project.id === "01" ? (
                    [
                      { title: "减少用户操作成本", desc: "优化操作流程，降低操作时的操作负担，保障操作安全" },
                      { title: "提升信息获取效率", desc: "整合高频信息，优化信息体系，让用户快速获取关键内容" },
                      { title: "人车共驾提升信任", desc: "通过清晰的反馈场景与化交互，强化人车和谐，提升用户信任" }
                    ].map((goal, i) => (
                      <div key={i} className="space-y-1 group/goal">
                        <h4 className="text-zinc-200 text-lg font-medium group-hover/item:text-[#8165F2] transition-colors">{goal.title}</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed font-light group-hover/item:text-zinc-400 transition-colors">{goal.desc}</p>
                      </div>
                    ))
                  ) : project.id === "03" ? (
                    <div className="space-y-4">
                      {[
                        { title: "输出完整设计规范库", desc: "可直接交付开发，支撑后续产品迭代。" },
                        { title: "解决体验痛点", desc: "全系统视觉统一，用户操作效率与信息获取效率显著提升。" },
                        { title: "建立设计体系", desc: "形成了可复用的 B 端中后台设计方法论。" }
                      ].map((item, i) => (
                        <div key={i} className="space-y-1 group/goal">
                          <h4 className="text-zinc-200 text-lg font-medium group-hover/item:text-[#507AFD] transition-colors">{item.title}</h4>
                          <p className="text-zinc-500 text-sm leading-relaxed font-light group-hover/item:text-zinc-400 transition-colors">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  ) : project.id === "04" ? (
                    <div className="space-y-4">
                      {[
                        { title: "女性向解谜视觉体系", desc: "完成角色、场景、道具、UI 全链路视觉资产设计。" },
                        { title: "都市轻奢悬疑风格", desc: "打造统一视觉风格，强化游戏沉浸感与用户情感共鸣。" },
                        { title: "标准化 AI 流程", desc: "建立 AI 绘图流程与视觉资产规范，保障项目高效落地。" }
                      ].map((item, i) => (
                        <div key={i} className="space-y-1 group/goal">
                          <h4 className="text-zinc-200 text-lg font-medium group-hover/item:text-[#C08857] transition-colors">{item.title}</h4>
                          <p className="text-zinc-500 text-sm leading-relaxed font-light group-hover/item:text-zinc-400 transition-colors">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  ) : project.id === "05" ? (
                    <div className="space-y-4">
                      {[
                        { title: "食小龍 IP 全案设计", desc: "完成从 0 到 1 的全案设计，包括人设、造型、3D 建模等。" },
                        { title: "强化品牌记忆点", desc: "打造高辨识度、高亲和力的火锅品牌 IP，强化用户连接。" },
                        { title: "全场景应用方案", desc: "输出可落地的全场景应用方案，适配品牌营销、周边开发。" }
                      ].map((item, i) => (
                        <div key={i} className="space-y-1 group/goal">
                          <h4 className="text-zinc-200 text-lg font-medium group-hover/item:text-[#EF312C] transition-colors">{item.title}</h4>
                          <p className="text-zinc-500 text-sm leading-relaxed font-light group-hover/item:text-zinc-400 transition-colors">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h4 className="text-zinc-200 text-lg font-medium group-hover/item:text-[#53C34D] transition-colors">1. 设计洞察与产品定位</h4>
                        <div className="space-y-2 pl-4 border-l border-white/5">
                          <p className="text-zinc-400 text-xs leading-relaxed font-light"><span className="text-zinc-200">核心逻辑：</span>基于业务诉求拆解用户需求，锚定产品核心定位，明确设计方向</p>
                          <div className="space-y-1">
                            <p className="text-zinc-500 text-[10px] uppercase tracking-wider">核心输出：</p>
                            <ul className="text-zinc-400 text-xs space-y-1 list-disc list-inside font-light">
                              <li>业务诉求拆解：梳理产品核心功能与商业目标</li>
                              <li>用户需求挖掘：提炼用户核心痛点与真实诉求</li>
                              <li>产品定位：明确产品差异化优势与设计发力点</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-zinc-200 text-lg font-medium group-hover/item:text-[#53C34D] transition-colors">2. 操作流程梳理</h4>
                        <div className="space-y-2 pl-4 border-l border-white/5">
                          <p className="text-zinc-400 text-xs leading-relaxed font-light">拆解用户核心操作路径，定位流程痛点，优化操作体验：</p>
                          <p className="text-zinc-300 text-xs font-medium">核心流程：选择地域方式 → 输入生成内容 → 查看生成内容 → 最终生成</p>
                          <p className="text-zinc-500 text-[10px] leading-relaxed font-light"><span className="text-zinc-400">优化方向：</span>简化操作步骤、减少页面跳转、强化操作反馈，提升流程流畅度</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className={`h-px w-0 group-hover/item:w-full bg-gradient-to-r transition-all duration-1000 ${
                  project.id === "01" ? "from-[#8165F2]/60 to-transparent" :
                  project.id === "02" ? "from-[#53C34D]/60 to-transparent" :
                  project.id === "03" ? "from-[#507AFD]/60 to-transparent" :
                  project.id === "04" ? "from-[#C08857]/60 to-transparent" :
                  "from-[#EF312C]/60 to-transparent"
                }`} />
              </motion.div>

              {/* Section 4: 设计亮点 */}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className={`space-y-6 group/item p-7 rounded-3xl border border-white/5 bg-white/[0.01] transition-all duration-700 ${
                  project.id === "01" ? "hover:bg-[#8165F2]/[0.03] hover:border-[#8165F2]/30" :
                  project.id === "02" ? "hover:bg-[#53C34D]/[0.03] hover:border-[#53C34D]/30" :
                  project.id === "03" ? "hover:bg-[#507AFD]/[0.03] hover:border-[#507AFD]/30" :
                  project.id === "04" ? "hover:bg-[#C08857]/[0.03] hover:border-[#C08857]/30" :
                  "hover:bg-[#EF312C]/[0.03] hover:border-[#EF312C]/30"
                }`}
              >
                <div className="space-y-2">
                  <span className={`text-[10px] uppercase tracking-[0.6em] text-zinc-600 font-mono block transition-colors ${
                    project.id === "01" ? "group-hover/item:text-[#8165F2]" :
                    project.id === "02" ? "group-hover/item:text-[#53C34D]" :
                    project.id === "03" ? "group-hover/item:text-[#507AFD]" :
                    project.id === "04" ? "group-hover/item:text-[#C08857]" :
                    "group-hover/item:text-[#EF312C]"
                  }`}>04</span>
                  <h3 className={`text-4xl font-serif text-white transition-colors ${
                    project.id === "01" ? "group-hover/item:text-[#8165F2]" :
                    project.id === "02" ? "group-hover/item:text-[#53C34D]" :
                    project.id === "03" ? "group-hover/item:text-[#507AFD]" :
                    project.id === "04" ? "group-hover/item:text-[#C08857]" :
                    "group-hover/item:text-[#EF312C]"
                  }`}>{project.id === "03" ? "设计目标确立" : "设计亮点"}</h3>
                </div>
                <div className="grid gap-3">
                  {(project.id === "01" ? [
                    { title: "以用户中心为", desc: "深度拆解用户场景与需求，所有设计均围绕真实用户痛点展开" },
                    { title: "驾驶安全优先", desc: "所有交通设计均以降低驾驶分心为核心，保障行车安全" },
                    { title: "人车共驾理念", desc: "通过多模态反馈、场景化交互，打造「人车共驾」的全新体验" },
                    { title: "品牌理念融合", desc: "完美承接本田「0系列」品牌理念，实现功能与情感的双重体验" }
                  ] : project.id === "03" ? [
                    { title: "设计语言统一", desc: "规范组件、色彩、字体，建立全系统可用的设计规范库。" },
                    { title: "提升操作效率", desc: "优化核心业务流程，减少无效操作与页面跳转。" },
                    { title: "提升信息获取效率", desc: "梳理信息层级，突出重点数据，降低认知负荷。" }
                  ] : project.id === "04" ? [
                    { title: "用户导向", desc: "深度贴合女性向用户审美与情感需求，角色塑造精准戳中用户喜好" },
                    { title: "风格统一", desc: "全资产视觉风格高度统一，世界观完整，沉浸感强" },
                    { title: "全流程能力", desc: "从前期策划、流程规划到最终落地，完整覆盖游戏视觉设计全流程" },
                    { title: "AI 赋能", desc: "熟练运用 AI 工具高效产出高质量视觉资产，提升设计效率" }
                  ] : project.id === "05" ? [
                    { title: "品牌强绑定", desc: "IP 形象深度融合火锅 / 美食元素，完美适配品牌定位" },
                    { title: "造型讨喜", desc: "Q 版可爱风格，适配全年龄段用户，提升品牌好感度" },
                    { title: "延展性强", desc: "全场景覆盖，从 3D 动画到实体周边，商业价值拉满" },
                    { title: "风格统一", desc: "全链路视觉风格高度一致，品牌感突出" }
                  ] : [
                    { title: "以用户为中心", desc: "深度拆解用户需求，所有设计均围绕真实用户痛点展开" },
                    { title: "全流程闭环", desc: "从调研到落地的完整设计流程，逻辑严谨，可落地性强" },
                    { title: "品牌与体验兼顾", desc: "在提升用户体验的同时，强化了品牌感知，实现商业与用户价值的平衡" }
                  ]).map((highlight, i) => (
                    <div key={i} className="flex gap-4 items-center group/hl">
                      <div className={`w-1.5 h-1.5 rounded-full bg-zinc-800 transition-all duration-500 group-hover/item:scale-125 ${
                        project.id === "01" ? "group-hover/item:bg-[#8165F2] shadow-[0_0_8px_rgba(129,101,242,0)] group-hover/item:shadow-[0_0_15px_rgba(129,101,242,0.8)]" :
                        project.id === "02" ? "group-hover/item:bg-[#53C34D] shadow-[0_0_8px_rgba(83,195,77,0)] group-hover/item:shadow-[0_0_15px_rgba(83,195,77,0.8)]" :
                        project.id === "03" ? "group-hover/item:bg-[#507AFD] shadow-[0_0_8px_rgba(80,122,253,0)] group-hover/item:shadow-[0_0_15px_rgba(80,122,253,0.8)]" :
                        project.id === "04" ? "group-hover/item:bg-[#C08857] shadow-[0_0_8px_rgba(192,136,87,0)] group-hover/item:shadow-[0_0_15px_rgba(192,136,87,0.8)]" :
                        "group-hover/item:bg-[#EF312C] shadow-[0_0_8px_rgba(239,49,44,0)] group-hover/item:shadow-[0_0_15px_rgba(239,49,44,0.8)]"
                      }`} />
                      <div className="flex flex-col">
                        <span className={`text-zinc-200 text-lg font-medium transition-all duration-500 ${
                          project.id === "01" ? "group-hover/item:text-[#8165F2]" :
                          project.id === "02" ? "group-hover/item:text-[#53C34D]" :
                          project.id === "03" ? "group-hover/item:text-[#507AFD]" :
                          project.id === "04" ? "group-hover/item:text-[#C08857]" :
                          "group-hover/item:text-[#EF312C]"
                        }`}>{highlight.title}</span>
                        <span className="text-zinc-500 text-sm font-light group-hover/item:text-zinc-400 transition-colors duration-500">{highlight.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={`h-px w-0 group-hover/item:w-full bg-gradient-to-r transition-all duration-1000 ${
                  project.id === "01" ? "from-[#8165F2]/60 to-transparent" :
                  project.id === "02" ? "from-[#53C34D]/60 to-transparent" :
                  project.id === "03" ? "from-[#507AFD]/60 to-transparent" :
                  project.id === "04" ? "from-[#C08857]/60 to-transparent" :
                  "from-[#EF312C]/60 to-transparent"
                }`} />
              </motion.div>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 gap-24">
              <div className="space-y-12">
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-mono">Overview</span>
                  <p className="text-zinc-400 leading-relaxed text-lg">
                    {project.desc}
                  </p>
                </div>
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-mono">Role</span>
                  <p className="text-white">Lead UI/UX Designer</p>
                </div>
              </div>
              <div className="space-y-12">
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-mono">Challenge</span>
                  <p className="text-zinc-400 leading-relaxed">
                    The primary challenge was to balance complex functional requirements with a clean, intuitive interface that reduces cognitive load for the end user.
                  </p>
                </div>
                <div className="space-y-4">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-mono">Solution</span>
                  <p className="text-zinc-400 leading-relaxed">
                    By implementing a modular design system and focusing on spatial hierarchy, we created a seamless experience that guides the user through the workflow naturally.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Optimized Image Layout */}
          <div className="mt-24 space-y-[10px]">
            {project.id === "01" ? (
              <>
                {/* First Image: Full Width with subtle floating effect */}
                <motion.div 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full rounded-3xl overflow-hidden border border-white/5 group/img shadow-2xl"
                >
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative"
                  >
                    <img 
                      src="https://cdn.phototourl.com/free/2026-04-01-47e15aa1-84a3-4dfc-bba5-c839cba8dc3b.png" 
                      className="w-full h-auto opacity-95 group-hover/img:opacity-100 transition-opacity duration-700" 
                      alt="Project Detail 1" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute inset-0 opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-t from-[#8165F2]/10 to-transparent" />
                  </motion.div>
                </motion.div>

                {/* Bottom two images: Staggered or Grid Layout */}
                <div className="grid md:grid-cols-2 gap-[10px]">
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative rounded-3xl overflow-hidden border border-white/5 group/img shadow-xl"
                  >
                    <motion.div
                      whileHover={{ y: -10, scale: 1.02 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="relative h-full"
                    >
                      <img 
                        src="https://cdn.phototourl.com/free/2026-04-01-72699e62-480c-483e-9f35-8361db108360.png" 
                        className="w-full h-full object-cover opacity-95 group-hover/img:opacity-100 transition-opacity duration-700" 
                        alt="Project Detail 2" 
                        referrerPolicy="no-referrer" 
                      />
                      <div className="absolute inset-0 opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 pointer-events-none shadow-[inset_0_0_50px_rgba(129,101,242,0.2)]" />
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="relative rounded-3xl overflow-hidden border border-white/5 group/img shadow-xl"
                  >
                    <motion.div
                      whileHover={{ y: -10, scale: 1.02 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="relative h-full"
                    >
                      <img 
                        src="https://cdn.phototourl.com/member/2026-04-01-26b706df-35a5-4c46-8af2-9d68e2c19036.png" 
                        className="w-full h-full object-cover opacity-95 group-hover/img:opacity-100 transition-opacity duration-700" 
                        alt="Project Detail 3" 
                        referrerPolicy="no-referrer" 
                      />
                      <div className="absolute inset-0 opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 pointer-events-none shadow-[inset_0_0_50px_rgba(129,101,242,0.2)]" />
                    </motion.div>
                  </motion.div>
                </div>
              </>
            ) : project.id === "02" ? (
              <div className="grid grid-cols-3 gap-[10px] items-start">
                {[
                  "https://cdn.phototourl.com/free/2026-04-01-62ed0b0d-933b-4082-99fc-170caacb1346.png",
                  "https://cdn.phototourl.com/member/2026-04-02-7521e858-a68a-4e0e-9949-09154fa11aaf.png",
                  "https://cdn.phototourl.com/member/2026-04-01-ac2f5e90-cdc8-44b4-b0c2-3b7b52472d18.png"
                ].map((url, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full group/img"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <img 
                        src={url} 
                        className="w-full h-auto opacity-95 group-hover/img:opacity-100 transition-all duration-700" 
                        alt={`AI Drawing Detail ${idx + 1}`} 
                        referrerPolicy="no-referrer" 
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            ) : project.id === "03" ? (
              <div className="flex flex-col gap-[10px]">
                {[
                  "https://cdn.phototourl.com/member/2026-04-02-167071e6-7cd5-44be-8eaa-c5db9118630b.png",
                  "https://cdn.phototourl.com/member/2026-04-02-25a63e4f-b250-461c-b516-0e5840da10a6.png",
                  "https://cdn.phototourl.com/member/2026-04-02-7e45be47-db94-431f-9499-3e38305b2a1f.png"
                ].map((url, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full group/img"
                  >
                    <motion.div
                      whileHover={{ scale: 1.005 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <img 
                        src={url} 
                        className="w-full h-auto opacity-95 group-hover/img:opacity-100 transition-all duration-700" 
                        alt={`Easy Dentist Detail ${idx + 1}`} 
                        referrerPolicy="no-referrer" 
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            ) : project.id === "04" ? (
              <div className="flex flex-col gap-[10px]">
                {[
                  "https://cdn.phototourl.com/member/2026-04-02-63332bc9-dcc3-43d4-866a-d0b70f1f5145.png",
                  "https://cdn.phototourl.com/member/2026-04-02-675b2bfd-f273-4b45-8200-39325c890ece.png",
                  "https://cdn.phototourl.com/member/2026-04-02-664ab28d-dfbb-4d04-b095-01016e18b973.png"
                ].map((url, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full group/img"
                  >
                    <motion.div
                      whileHover={{ scale: 1.005 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <img 
                        src={url} 
                        className="w-full h-auto opacity-95 group-hover/img:opacity-100 transition-all duration-700" 
                        alt={`Mystery Circle Detail ${idx + 1}`} 
                        referrerPolicy="no-referrer" 
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            ) : project.id === "05" ? (
              <div className="flex flex-col gap-[10px]">
                {[
                  "https://cdn.phototourl.com/member/2026-04-02-2de2fd87-5c0b-45d0-bd40-b291a4f366e3.png",
                  "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAESfUlpzeLATuoU5syND1Gh4crG_dWYOAAChB4AApKCcVZp4CChCi3KBToE.png",
                  "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAESfUxpzeLx7Bhd4kM364UoAvg1W9_QIAAChx4AApKCcVbpcRn9ZM5AbDoE.png"
                ].map((url, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full group/img"
                  >
                    <motion.div
                      whileHover={{ scale: 1.005 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <img 
                        src={url} 
                        className="w-full h-auto opacity-95 group-hover/img:opacity-100 transition-all duration-700" 
                        alt={`Tao Detail ${idx + 1}`} 
                        referrerPolicy="no-referrer" 
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full bg-zinc-900/20 rounded-xl overflow-hidden border border-white/5 group/img"
              >
                 <img 
                   src={project.image} 
                   className="w-full h-auto opacity-95 group-hover/img:scale-[1.005] group-hover/img:opacity-100 transition-all duration-700 ease-out" 
                   alt="Detail" 
                   referrerPolicy="no-referrer" 
                 />
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </motion.div>
  );
};


const ProjectSection = ({ work, onClick }: { work: any; onClick: () => void; key?: string | number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 80 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    mouseX.set(x - 0.5);
    mouseY.set(y - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const imageTranslateX = useTransform(dx, [-0.5, 0.5], ["-2%", "2%"]);
  const imageTranslateY = useTransform(dy, [-0.5, 0.5], ["-2%", "2%"]);
  const contentTranslateX = useTransform(dx, [-0.5, 0.5], ["15px", "-15px"]);
  const contentTranslateY = useTransform(dy, [-0.5, 0.5], ["15px", "-15px"]);

  const spotlightX = useTransform(dx, [-0.5, 0.5], ["0%", "100%"]);
  const spotlightY = useTransform(dy, [-0.5, 0.5], ["0%", "100%"]);

  return (
    <motion.div 
      id={`project-${work.id}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1 }}
      className={`relative h-screen w-full overflow-hidden flex cursor-pointer ${
        work.layout === 'center-left' ? 'items-center' : 
        work.layout === 'top-left' ? 'items-start' : 
        'items-end'
      } group/project ${work.align === 'right' ? 'justify-end' : 'justify-start'}`}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 scale-110">
        <motion.div 
          style={{ x: imageTranslateX, y: imageTranslateY }}
          className="w-full h-full"
        >
          <motion.img 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={work.image} 
            alt={work.title}
            className="w-full h-full object-cover opacity-100 group-hover/project:opacity-40 group-hover/project:scale-105 transition-all duration-1000 ease-out"
            style={{
              filter: "contrast(1.1) saturate(1.1)",
            }}
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Interactive Spotlight Overlay */}
        <motion.div 
          className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover/project:opacity-100 transition-opacity duration-500"
          style={{
            background: useTransform(
              [spotlightX, spotlightY],
              ([x, y]) => `radial-gradient(circle 500px at ${x} ${y}, rgba(255,255,255,0.1), transparent)`
            )
          }}
        />

        {/* Static Overlays - Hidden by default, shown on hover */}
        <div className="absolute inset-0 bg-[#0a0a0a] opacity-0 group-hover/project:opacity-40 transition-opacity duration-700" />
        
        {/* Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      {/* Content Overlay - Title always visible, others on hover */}
      <motion.div 
        style={{ x: contentTranslateX, y: contentTranslateY }}
        className={`relative z-20 w-full px-8 md:px-24 ${
          work.layout === 'bottom-center' ? 'pb-8 md:pb-12' : 
          work.layout === 'center-left' ? 'pb-0' : 
          work.layout === 'top-left' ? 'pt-32 md:pt-48 pb-0' :
          'pb-24 md:pb-32'
        } transition-all duration-700 flex ${
          work.layout === 'bottom-center' 
            ? 'justify-center items-end h-full' 
            : work.align === 'right' 
              ? 'justify-end' 
              : 'justify-start'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className={`${work.layout === 'bottom-center' ? 'text-center mb-6' : 'max-w-2xl text-left'}`}
        >
          <div className="opacity-0 group-hover/project:opacity-100 transition-opacity duration-700">
            {work.logo && (
              <motion.img 
                src={work.logo} 
                alt="Project Logo" 
                className={`h-12 md:h-16 mb-8 object-contain ${work.layout === 'bottom-center' ? 'mx-auto' : ''}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                referrerPolicy="no-referrer"
              />
            )}
            {!work.hideCaseStudy && (
              <span className="text-xs font-mono text-zinc-500 mb-4 block tracking-[0.4em] uppercase">
                {work.id} / CASE STUDY
              </span>
            )}
          </div>
          
          <div className={`flex items-center gap-6 mb-8 ${work.layout === 'bottom-center' ? 'justify-center' : ''}`}>
            {work.titleLeftImage && (
              <motion.img 
                src={work.titleLeftImage}
                alt="Title Icon"
                className="h-16 md:h-24 object-contain"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                referrerPolicy="no-referrer"
              />
            )}
            <h3 className={`tracking-tighter leading-[0.9] text-white transition-all duration-700 cursor-default ${work.titleWeight === 'heavy' ? 'font-black' : ''} ${work.titleFont || 'font-serif'} ${work.titleSize || 'text-6xl md:text-8xl'}`}>
              {work.title.split("").map((char: string, i: number) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  whileHover={{ 
                    y: -15, 
                    color: "#fff",
                    opacity: 1,
                    textShadow: "0 0 30px rgba(255,255,255,0.8)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h3>
          </div>

          <div className="opacity-0 group-hover/project:opacity-100 transition-opacity duration-700">
            {work.subtitle && (
              <p className="text-white/30 group-hover/project:text-white/40 text-xl md:text-2xl mb-6 font-serif italic transition-all duration-500 cursor-default">
                {work.subtitle.split("").map((char: string, i: number) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    whileHover={{ 
                      y: -8, 
                      color: "#fff",
                      opacity: 1,
                      textShadow: "0 0 20px rgba(255,255,255,0.8)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 12 }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </p>
            )}
            {work.desc && (
              <p className={`text-white/30 group-hover/project:text-white/40 text-lg md:text-xl mb-12 leading-relaxed font-light transition-all duration-500 cursor-default ${work.fullWidthDesc ? 'max-w-none whitespace-nowrap' : 'max-w-lg'} ${work.layout === 'bottom-center' ? 'mx-auto' : ''}`}>
                {work.desc.split(" ").map((word: string, i: number) => (
                  <motion.span
                    key={i}
                    className="inline-block mr-[0.3em]"
                    whileHover={{ 
                      y: -5, 
                      color: "#fff",
                      opacity: 1,
                      textShadow: "0 0 15px rgba(255,255,255,0.6)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </p>
            )}
            <motion.button 
              whileHover={{ x: 15 }}
              className={`group/btn flex items-center gap-6 text-[10px] uppercase tracking-[0.4em] text-zinc-400 hover:text-white transition-colors ${work.layout === 'bottom-center' ? 'mx-auto' : ''}`}
            >
              <span className="relative py-2">
                Explore Project
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-zinc-800 group-hover/btn:bg-white transition-colors" />
              </span>
              <div className="w-12 h-[1px] bg-zinc-800 group-hover/btn:w-16 group-hover/btn:bg-white transition-all duration-500" />
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative side text */}
      <div className="absolute right-12 bottom-32 hidden lg:block overflow-hidden">
        <motion.span 
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.8 }}
          className="writing-vertical-lr text-[9px] uppercase tracking-[0.6em] text-zinc-700"
        >
          {work.id} — NEXT GENERATION DESIGN
        </motion.span>
      </div>
    </motion.div>
  );
};

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [modalContent, setModalContent] = useState<{ type: 'image' | 'text'; content: string } | null>(null);
  
  // 3D Tilt Effect State
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 100, damping: 30 });

  const bgX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-50, 50]), { stiffness: 50, damping: 20 });
  const bgY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-50, 50]), { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth) - 0.5);
      mouseY.set((e.clientY / innerHeight) - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);
  
  return (
    <main ref={containerRef} className="relative bg-[#020202] text-white selection:bg-white selection:text-black overflow-x-hidden scroll-smooth">
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            onBack={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {modalContent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-8 bg-black/40 backdrop-blur-sm"
            onClick={() => setModalContent(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-2xl w-full bg-white/5 backdrop-blur-2xl rounded-3xl p-12 overflow-hidden shadow-2xl border border-white/10"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setModalContent(null)}
                className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              
              {modalContent.type === 'image' ? (
                <div className="flex flex-col items-center gap-8">
                  <img src={modalContent.content} className="w-64 h-64 object-contain rounded-xl" alt="QR Code" referrerPolicy="no-referrer" />
                  <p className="text-zinc-400 text-sm uppercase tracking-widest">Scan to connect on WeChat</p>
                </div>
              ) : (
                <div className="text-center space-y-6">
                  <p className="text-4xl md:text-5xl font-serif tracking-tighter">{modalContent.content}</p>
                  <p className="text-zinc-500 text-xs uppercase tracking-[0.4em]">Contact Information</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Visual Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020202]">
        {/* 3D Grid Background */}
        <motion.div 
          style={{ 
            rotateX, 
            rotateY, 
            x: bgX, 
            y: bgY,
            transformStyle: "preserve-3d" 
          }}
          className="absolute inset-[-20%] opacity-[0.07]"
        >
          <div className="w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        </motion.div>

        {/* Diagonal Spatial Light Lines - Boosted Impact */}
        <div className="absolute inset-0 z-0 perspective-[1200px]">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[400vh] bg-gradient-to-b from-transparent via-white/40 to-transparent"
              style={{
                width: i % 4 === 0 ? '3px' : i % 2 === 0 ? '2px' : '1px',
                left: `${-10 + i * 6}%`,
                top: "-150vh",
                rotateZ: "35deg",
                rotateX: "45deg",
                filter: `blur(${i % 5 === 0 ? '4px' : '2px'}) brightness(1.5)`,
                boxShadow: i % 4 === 0 ? "0 0 20px rgba(255,255,255,0.2)" : "none",
                x: useSpring(useTransform(mouseX, [-0.5, 0.5], [i * -120, i * 120]), { stiffness: 15, damping: 35 }),
                y: useSpring(useTransform(mouseY, [-0.5, 0.5], [i * -60, i * 60]), { stiffness: 15, damping: 35 }),
                z: i * 80,
              }}
              animate={{
                opacity: [0.1, 0.6, 0.1],
                y: ["-20%", "20%"],
              }}
              transition={{
                duration: 6 + i * 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Enhanced Dynamic Light Blobs - Boosted with Brand Color */}
        <motion.div 
          animate={{
            x: [-300, 300, -300],
            y: [-150, 150, -150],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.5], [0.6, 0.2]),
            x: useSpring(useTransform(mouseX, [-0.5, 0.5], [-150, 150]), { stiffness: 25, damping: 25 }),
          }}
          className="absolute -top-1/4 -left-1/4 w-[130vw] h-[130vw] bg-[radial-gradient(circle,rgba(129,101,242,0.15)_0%,rgba(60,60,60,0.05)_40%,transparent_80%)] blur-[140px]"
        />
        <motion.div 
          animate={{
            x: [300, -300, 300],
            y: [150, -150, 150],
            scale: [1.4, 1, 1.4],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.5], [0.5, 0.1]),
            x: useSpring(useTransform(mouseX, [-0.5, 0.5], [150, -150]), { stiffness: 25, damping: 25 }),
          }}
          className="absolute -bottom-1/4 -right-1/4 w-[120vw] h-[120vw] bg-[radial-gradient(circle,rgba(120,120,120,0.3)_0%,rgba(50,50,50,0.1)_50%,transparent_80%)] blur-[160px]"
        />
        
        {/* Flowing Light Streaks - Boosted */}
        <motion.div 
          animate={{
            opacity: [0.2, 0.5, 0.2],
            x: ["-100%", "100%"],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/3 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md"
        />
        
        {/* Interactive Light Follower - Boosted */}
        <motion.div 
          style={{
            x: useSpring(useTransform(mouseX, [-0.5, 0.5], [-300, 300]), { stiffness: 40, damping: 25 }),
            y: useSpring(useTransform(mouseY, [-0.5, 0.5], [-300, 300]), { stiffness: 40, damping: 25 }),
            opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]),
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,transparent_70%)] blur-[80px]"
        />

        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020202]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-serif italic tracking-tighter"
        >
        </motion.div>
        <div className="flex gap-8 text-xs uppercase tracking-widest font-medium">
          {["Home", "About", "Works", "Contact"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative hover:text-white transition-colors group/nav"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover/nav:w-full" />
            </motion.a>
          ))}
        </div>
      </nav>

      {/* Section 1: Home (Hero) */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center px-8 text-center perspective-1000">
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <motion.div 
            style={{ translateZ: 50 }}
            className="text-[10vw] md:text-[8vw] font-serif leading-[0.85] tracking-tighter mb-8 cursor-default select-none"
          >
            <div className="overflow-hidden">
              {"UI/UX".split("").map((char, i) => (
                <motion.span
                  key={i}
                  display="inline-block"
                  whileHover={{ 
                    y: -10, 
                    color: "#fff",
                    textShadow: "0 0 20px rgba(255,255,255,0.5)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="inline-block transition-colors duration-300"
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div className="overflow-hidden">
              {"DESIGNER".split("").map((char, i) => (
                <motion.span
                  key={i}
                  display="inline-block"
                  whileHover={{ 
                    y: -10, 
                    italic: true,
                    color: "#fff",
                    textShadow: "0 0 20px rgba(255,255,255,0.5)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="inline-block italic text-zinc-500 transition-colors duration-300"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.div>
          
          <motion.p 
            style={{ translateZ: 20 }}
            whileHover={{ color: "#fff" }}
            className="max-w-md mx-auto text-zinc-400 text-sm md:text-base tracking-wide uppercase transition-colors duration-500 cursor-default"
          >
            Crafting digital experiences through minimalist aesthetics and meaningful interactions.
          </motion.p>
          
          {/* Decorative 3D Elements */}
          <motion.div 
            style={{ translateZ: -50 }}
            className="absolute -top-10 -left-10 w-40 h-40 border border-zinc-800 rounded-full opacity-20"
          />
          <motion.div 
            style={{ translateZ: 100 }}
            className="absolute -bottom-20 -right-10 w-20 h-20 bg-zinc-500/10 blur-3xl rounded-full"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="w-5 h-5 animate-bounce text-zinc-600" />
        </motion.div>
      </section>

      {/* Section 2: Personal Info (About) */}
      <section id="about" className="relative min-h-screen py-32 px-8 md:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-24 items-start">
            {/* Left Column: Profile & Skills */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:sticky lg:top-32 space-y-12"
            >
              <div className="relative group">
                <div className="aspect-[3/4] bg-zinc-900 overflow-hidden rounded-2xl grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl relative z-10">
                  <motion.img 
                    src="https://image2url.com/r2/default/images/1775012063746-7bf42e42-68f8-49b1-a43d-ad12361e2fd0.png" 
                    alt="於刘豪" 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative background element */}
                <div className="absolute -inset-4 bg-zinc-900/50 rounded-3xl -z-0 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-5xl font-serif tracking-tighter leading-none">
                    {"Hello".split("").map((char, i) => (
                      <motion.span 
                        key={i} 
                        whileHover={{ y: -10, color: "#fff", textShadow: "0 0 20px rgba(255,255,255,0.5)" }} 
                        className="inline-block transition-all duration-300 cursor-default"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </h2>
                  <h3 className="text-3xl font-serif tracking-tighter text-zinc-500">
                    {"我是於刘豪".split("").map((char, i) => (
                      <motion.span 
                        key={i} 
                        whileHover={{ y: -5, color: "#fff" }} 
                        className="inline-block transition-all duration-300 cursor-default"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-xs font-light">
                    在UI/UX设计领域，致力于通过沉浸式的交互与最大化的视觉体验，为用户创造情感共鸣的数字体验。
                  </p>
                </div>
                
                {/* Skills Section */}
                <div className="space-y-6 pt-8 border-t border-zinc-900">
                  <span className="text-xs uppercase tracking-[0.3em] text-zinc-600 font-mono block mb-4">核心技能 / SKILLS</span>
                  <div className="flex flex-wrap gap-4">
                    {["人机界面设计", "用户界面/用户体验", "设计系统", "用户研究", "原型制作"].map((skill, i) => (
                      <motion.span 
                        key={i}
                        whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
                        className="px-5 py-2 border border-zinc-800 rounded-full text-sm text-zinc-400 transition-colors duration-300 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="space-y-6 pt-8 border-t border-zinc-900">
                  <div className="flex items-center justify-between group cursor-pointer">
                    <span className="text-xs uppercase tracking-[0.3em] text-zinc-600 font-mono">电话</span>
                    <motion.span whileHover={{ x: -5, color: "#fff" }} className="text-zinc-300 text-lg transition-colors">18268721623</motion.span>
                  </div>
                  <div className="flex items-center justify-between group cursor-pointer">
                    <span className="text-xs uppercase tracking-[0.3em] text-zinc-600 font-mono">邮箱</span>
                    <motion.span whileHover={{ x: -5, color: "#fff" }} className="text-zinc-300 text-lg transition-colors">1564208323@qq.com</motion.span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Work Experience */}
            <div className="space-y-32">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <div className="flex items-baseline gap-6 mb-20">
                  <h2 className="text-7xl font-serif tracking-tighter">
                    {"工作经历".split("").map((char, i) => (
                      <motion.span 
                        key={i} 
                        whileHover={{ y: -10, color: "#fff" }} 
                        className="inline-block transition-all duration-300 cursor-default"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </h2>
                  <div className="h-[1px] flex-grow bg-zinc-900" />
                  <span className="text-zinc-700 font-mono text-xs tracking-widest">01 — 03</span>
                </div>

                <div className="space-y-0 relative">
                  {/* Vertical Timeline Line with Scroll Effect */}
                  <div className="absolute left-0 top-0 w-[1px] h-full bg-zinc-900">
                    <motion.div 
                      className="w-full bg-white origin-top"
                      style={{ height: "100%", scaleY: useTransform(scrollYProgress, [0.1, 0.5], [0, 1]) }}
                    />
                  </div>

                  {[
                    {
                      company: "杭州骏彩科技有限公司",
                      period: "2024.09 — 2026.01",
                      role: "HMI设计师 / HMI Designer",
                      details: [
                        "主导多款车型的 HMI 视觉与交互定义，涵盖空调、座椅及多屏联动系统。",
                        "构建 3D 桌面概念设计与感知物建模规范，通过空间化设计语言降低用户认知负荷。",
                        "制定平台化设计系统框架，确保跨车型视觉一致性与开发落地的高还原度。"
                      ]
                    },
                    {
                      company: "杭州爱米粒文化创意有限公司",
                      period: "2023.06 — 2024.07",
                      role: "UI设计师 / UI Designer",
                      details: [
                        "主导 AI 绘画工具类 App 的核心视觉升级，包括图转漫、AI 创作等高频功能模块。",
                        "基于市场调研与用户行为分析，优化产品原型与交互逻辑，显著提升用户留存与互动率。",
                        "协同开发团队推动高保真界面落地，并负责产品多媒体宣传物料的视觉把控。"
                      ]
                    },
                    {
                      company: "轻松致远科技有限公司",
                      period: "2022.04 — 2023.05",
                      role: "UI设计师 / UI Designer",
                      details: [
                        "深度参与医疗管理系统的数字化迭代，通过重构交互流程提升诊疗效率 20% 以上。",
                        "独立负责患者管理、数据看板等核心模块的视觉体系建立，强化信息层级与易用性。",
                        "持续优化图标系统与组件库，提升产品整体专业感与品牌辨识度。"
                      ]
                    }
                  ].map((job, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, delay: idx * 0.2 }}
                      className="group relative pl-16 py-16 border-b border-zinc-900/30 last:border-0"
                    >
                      {/* Timeline Node */}
                      <div className="absolute left-[-5px] top-20 w-[11px] h-[11px] bg-[#0a0a0a] border border-zinc-800 rounded-full z-10 group-hover:border-white transition-colors duration-500">
                        <motion.div 
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          className="absolute inset-[2px] bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                      </div>
                      
                      <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
                        <div className="space-y-2">
                          <h4 className="text-3xl font-serif text-zinc-400 group-hover:text-white transition-all duration-700 tracking-tight">
                            {job.company}
                          </h4>
                          <div className="flex items-center gap-4">
                            <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 font-mono">{job.role}</span>
                            <div className="w-12 h-[1px] bg-zinc-900 group-hover:w-20 group-hover:bg-zinc-600 transition-all duration-700" />
                          </div>
                        </div>
                        <div className="px-4 py-1 border border-zinc-900 rounded-full group-hover:border-zinc-700 transition-colors">
                          <span className="text-xs font-mono text-zinc-600 group-hover:text-zinc-300">{job.period}</span>
                        </div>
                      </div>

                      <div className="space-y-6 max-w-2xl">
                        {job.details.map((detail, dIdx) => (
                          <motion.div 
                            key={dIdx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + (dIdx * 0.1) }}
                            className="flex gap-4 group/item"
                          >
                            <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover/item:bg-white transition-colors" />
                            <p className="text-zinc-500 text-sm leading-relaxed group-hover/item:text-zinc-300 transition-colors duration-300">
                              {detail}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Portfolio (Works) */}
      <section id="works" className="relative">
        <div className="flex flex-col gap-[10px]">
          {[
            { 
              id: "01", 
              title: "本田HMI设计", 
              desc: "从0到1搭建“功能整合-体验优化-品牌赋能”的完整HMI设计", 
              image: "https://cdn.phototourl.com/free/2026-04-01-a2a33f2b-c037-4aa1-b33e-11083f517cee.png",
              logo: "https://image2url.com/r2/default/images/1775016805256-7e3e62ac-4292-4d3e-83ec-5cf40bd6eff5.png",
              align: "right",
              hideCaseStudy: true,
              fullWidthDesc: true
            },
            { 
              id: "02", 
              title: "AI画画", 
              subtitle: "这是一款利用人工智能技术实现绘画创作的APP",
              desc: "通过对用户体验、品牌感知的迭代升级，奠定2.0升级的视觉基调，让体验升级落地到用户需求，完成从原型到体验闭环。", 
              image: "https://cdn.phototourl.com/free/2026-04-01-71b1724f-f928-46ba-914a-e575140c96dd.png",
              logo: "https://image2url.com/r2/default/images/1775017921795-d2b487ff-7a2e-4b7c-a3ca-fa73871403b7.png",
              hideCaseStudy: true
            },
            { 
              id: "03", 
              title: "轻松牙医", 
              subtitle: "是牙医医疗后台系统",
              desc: "对界面进行交互逻辑简化、视觉层级优化、功能模块整合的迭代，将复杂的医疗办公与客户管理流程，转化为“医生易操作、管理者易管控”的直观界面", 
              image: "https://cdn.phototourl.com/free/2026-04-01-eda084ac-fb3f-41bb-9976-c7145a6c861d.png",
              logo: "https://image2url.com/r2/default/images/1775020211574-139b881d-f427-4cbd-a117-0cf94df21de4.png",
              hideCaseStudy: true
            },
            { 
              id: "04", 
              title: "谜圈剧本杀", 
              image: "https://cdn.phototourl.com/free/2026-04-01-a46d7a7c-b089-44c8-a91c-f6f666ce3c5d.png",
              titleLeftImage: "https://cdn.phototourl.com/free/2026-04-01-fb95faae-70e0-4ccd-ace2-3e205afd5d7e.png",
              hideCaseStudy: true,
              layout: "bottom-center",
              titleWeight: "heavy"
            },
            { 
              id: "05", 
              title: "饕", 
              subtitle: "A DIVINE BEAST BORN FORFOOD",
              image: "https://cdn.phototourl.com/free/2026-04-01-c9ae7281-c98b-4541-a715-a120e59c6e6d.png",
              hideCaseStudy: true,
              titleFont: "font-calligraphy",
              titleSize: "text-[18vw] md:text-[22vw]",
              layout: "top-left"
            }
          ].map((work, i) => (
            <ProjectSection key={work.id} work={work} onClick={() => setSelectedProject(work)} />
          ))}
        </div>
      </section>

      {/* Section 4: Footer (Contact) */}
      <footer id="contact" className="relative py-64 px-8 border-t border-zinc-900 overflow-hidden">
        {/* Decorative Background for Footer */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[radial-gradient(circle,rgba(255,255,255,0.03)_0%,transparent_70%)] blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-7xl md:text-[11vw] font-black mb-20 tracking-tighter uppercase leading-[0.8] select-none flex flex-col items-center">
              {[["THANK", "YOU"], ["FOR", "WATCHING"]].map((line, i) => (
                <div key={i} className="flex gap-[0.2em]">
                  {line.map((word, j) => (
                    <div key={j} className="flex">
                      {word.split("").map((char, k) => (
                        <motion.span
                          key={k}
                          display="inline-block"
                          whileHover={{ 
                            y: -15,
                            scale: 1.05,
                            textShadow: "0 0 30px rgba(255,255,255,0.4)"
                          }}
                          transition={{ 
                            type: "spring", 
                            stiffness: 200, 
                            damping: 15,
                            mass: 0.8
                          }}
                          className="inline-block stroke-text-v3 transition-all duration-500"
                        >
                          {char}
                        </motion.span>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </h2>
            
            <motion.div
              className="relative inline-block"
              onMouseMove={(e) => {
                const { clientX, clientY, currentTarget } = e;
                const { left, top, width, height } = currentTarget.getBoundingClientRect();
                const x = (clientX - (left + width / 2)) * 0.35;
                const y = (clientY - (top + height / 2)) * 0.35;
                e.currentTarget.style.transform = `translate(${x}px, ${y}px)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = `translate(0px, 0px)`;
              }}
              style={{ transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)" }}
            >
              <motion.button
                onClick={() => window.open('https://image2url.com/r2/default/documents/1775096457061-df520d7c-d8ba-40a2-a9d1-6bdf5bc76745.pdf', '_blank')}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "#fff", 
                  color: "#000",
                  boxShadow: "0 0 80px rgba(255,255,255,0.4)"
                }}
                whileTap={{ scale: 0.9 }}
                className="px-20 py-10 bg-white text-black rounded-full text-base md:text-lg font-black uppercase tracking-[0.4em] transition-all duration-500 shadow-2xl"
              >
                点击可查看完整作品集
              </motion.button>
            </motion.div>
          </motion.div>

          <div className="mt-64 flex flex-col md:flex-row justify-between items-center gap-16 text-zinc-600 text-[10px] uppercase tracking-[0.5em] font-bold">
            <div className="flex gap-16">
              <motion.div whileHover={{ scale: 1.2, color: "#fff" }} className="cursor-pointer transition-all">
                <MessageSquare 
                  onClick={() => setModalContent({ type: 'image', content: 'https://cdn.phototourl.com/free/2026-04-01-4c26a15e-672a-43e9-996b-7894e39b582c.png' })}
                  className="w-6 h-6" 
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, color: "#fff" }} className="cursor-pointer transition-all">
                <Phone 
                  onClick={() => setModalContent({ type: 'text', content: '18268721623' })}
                  className="w-6 h-6" 
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, color: "#fff" }} className="cursor-pointer transition-all">
                <MapPin 
                  onClick={() => setModalContent({ type: 'text', content: 'HANGZHOU, ZHEJIANG' })}
                  className="w-6 h-6" 
                />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, color: "#fff" }} className="cursor-pointer transition-all">
                <Mail 
                  onClick={() => setModalContent({ type: 'text', content: '1564208323@qq.com' })}
                  className="w-6 h-6" 
                />
              </motion.div>
            </div>
            
            <div className="flex gap-16 opacity-40 hover:opacity-100 transition-opacity">
              <span className="cursor-pointer hover:text-white transition-colors">Privacy</span>
              <span className="cursor-pointer hover:text-white transition-colors">Terms</span>
            </div>
          </div>
        </div>

        <style>{`
          .stroke-text-v3 {
            color: #fff;
            -webkit-text-stroke: 1px transparent;
            transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
            paint-order: stroke fill;
          }
          .stroke-text-v3:hover {
            color: transparent;
            -webkit-text-stroke: 1px rgba(255,255,255,0.8);
          }
          .writing-vertical-lr {
            writing-mode: vertical-lr;
          }
          .stroke-text {
            -webkit-text-stroke: 1px rgba(255,255,255,0.1);
            color: transparent;
          }
          * {
            cursor: none !important;
          }
        `}</style>
      </footer>

      {/* Custom Cursor */}
      <div className="hidden md:block">
        <Cursor />
      </div>
    </main>
  );
}

const Cursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white/20 rounded-full pointer-events-none z-[10000]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 1 }}
      />
    </>
  );
};
