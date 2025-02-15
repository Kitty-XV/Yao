import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lunar } from 'lunar-javascript';
import * as htmlToImage from 'html-to-image';
import QRCode from 'qrcode';
import { signs } from './data/signs';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';

// 生成随机哈希值的函数
const generateHash = () => {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let hash = '';
  for (let i = 0; i < 8; i++) {
    hash += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return hash;
};

// 分享预览弹窗组件
const ShareModal = ({ isOpen, onClose, sign, lunarDate, onShare, onSaveImage, shareType, isGenerating }) => {
  const previewRef = useRef(null);
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  
  useEffect(() => {
    if (isOpen) {
      QRCode.toDataURL(window.location.href, {
        margin: 1,
        width: 100,
        color: {
          dark: '#111827',
          light: '#FFFFFF'
        }
      })
      .then(url => {
        setQrCodeUrl(url);
      })
      .catch(err => {
        console.error('生成二维码失败:', err);
      });
    }
  }, [isOpen]);

  // 添加社交媒体分享功能
  const handleSocialShare = () => {
    // 直接调用复制链接功能
    onShare('link');
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/30 backdrop-blur-md z-50 flex items-center justify-center"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full mx-4 overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 border-b border-stone-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-song text-stone-900">分享签文</h3>
                <button 
                  className="p-2 hover:bg-stone-100 rounded-full transition-colors"
                  onClick={onClose}
                >
                  <svg className="w-5 h-5 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* 预览卡片 */}
            <div ref={previewRef} className="p-4 bg-stone-50">
              <div className="bg-white rounded-2xl p-8 shadow-sm relative overflow-hidden">
                {/* 背景装饰 */}
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-stone-50 rounded-full opacity-50" />
                <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-stone-50 rounded-full opacity-50" />
                
                <div className="text-center space-y-8 relative">
                  {/* Logo和日期 */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center">
                      <span className="text-xl font-kai text-stone-50">爻</span>
                    </div>
                    <div className="h-8 w-px bg-stone-200"></div>
                  <p className="text-sm font-kai text-stone-500 tracking-[0.3em]">
                    {lunarDate.year}年 {lunarDate.month}月{lunarDate.day}
                  </p>
                  </div>

                  {/* 签文标题和等级 */}
                  <div className="space-y-3">
                    <h2 className="text-2xl font-kai text-stone-900">{sign.name}</h2>
                    <span className={`inline-block px-4 py-1 text-sm tracking-[0.3em] rounded-full
                      ${sign.level === '上上' ? 'bg-orange-50 text-orange-800' :
                      sign.level === '上' ? 'bg-amber-50 text-amber-900' :
                      sign.level === '中' ? 'bg-stone-100 text-stone-900' :
                      sign.level === '下' ? 'bg-stone-100 text-stone-500' :
                      'bg-stone-100 text-stone-400'}`}
                    >
                      {sign.level}签
                    </span>
                  </div>

                  {/* 签文内容 */}
                  <div className={`rounded-xl p-6 ${
                    sign.level === '上上' ? 'bg-orange-50' :
                    sign.level === '上' ? 'bg-amber-50' :
                    sign.level === '中' ? 'bg-stone-50' :
                    sign.level === '下' ? 'bg-stone-100' :
                    'bg-stone-200'
                  }`}>
                    <p className={`text-lg font-kai leading-loose whitespace-pre-line ${
                      sign.level === '上上' ? 'text-orange-800' :
                      sign.level === '上' ? 'text-amber-900' :
                      sign.level === '中' ? 'text-stone-700' :
                      sign.level === '下' ? 'text-stone-800' :
                      'text-stone-900'
                    }`}>
                      {sign.poem}
                    </p>
                  </div>

                  {/* 分隔线 */}
                  <div className="flex items-center justify-center space-x-3">
                    <div className="flex-1 h-px bg-stone-100"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-stone-200"></div>
                    <div className="flex-1 h-px bg-stone-100"></div>
                  </div>

                  {/* 二维码区域 */}
                  {qrCodeUrl && (
                    <div className="flex items-start justify-between">
                      <div className="text-left flex-1 mr-6">
                        <p className="text-sm font-song text-stone-500 leading-relaxed">
                          {sign.advice}
                        </p>
                      </div>
                      <div className="flex flex-col items-center">
                        <img src={qrCodeUrl} alt="网站二维码" className="w-16 h-16" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* 操作按钮 */}
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                  className="px-6 py-3.5 bg-stone-900 text-stone-50 rounded-full text-sm font-song tracking-[0.3em] hover:bg-stone-800 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
                onClick={() => onSaveImage(previewRef.current)}
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>生成中...</span>
                    </>
                  ) : (
                    <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>保存图片</span>
                    </>
                  )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                  className="px-6 py-3.5 bg-stone-100 text-stone-900 rounded-full text-sm font-song tracking-[0.3em] hover:bg-stone-200 transition-colors flex items-center justify-center space-x-2"
                  onClick={handleSocialShare}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <span>复制链接</span>
              </motion.button>
            </div>
            </div>

            {/* 操作反馈提示 */}
            {shareType && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute left-1/2 -translate-x-1/2 bottom-4 z-50"
              >
                <div className="bg-stone-900 text-stone-50 rounded-full px-6 py-3 shadow-lg flex items-center space-x-2">
                  {shareType === 'image' ? (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-song">图片已保存</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <span className="text-sm font-song">链接已复制</span>
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// 抽签结果组件
const SignResult = () => {
  const navigate = useNavigate();
  const { hash } = useParams();
  const [sign, setSign] = useState(null);
  const [lunarDate, setLunarDate] = useState({
    year: '',
    month: '',
    day: ''
  });
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [shareType, setShareType] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const signCardRef = useRef(null);

  useEffect(() => {
    // 从 localStorage 获取签文数据
    const signMap = JSON.parse(localStorage.getItem('signMap') || '{}');
    const signId = signMap[hash];
    
    if (!signId) {
      navigate('/');
      return;
    }

    const signData = signs.find(s => s.id === parseInt(signId));
    if (!signData) {
      navigate('/');
      return;
    }
    setSign(signData);

    // 获取农历日期
    const lunar = Lunar.fromDate(new Date());
    const ganZhi = lunar.getYearInGanZhi();
    const month = lunar.getMonthInChinese();
    const day = lunar.getDayInChinese();
    setLunarDate({
      year: ganZhi,
      month,
      day
    });
  }, [hash, navigate]);

  const handleShareImage = async (element) => {
    try {
      setIsGenerating(true);
      setShareType('image');
      const dataUrl = await htmlToImage.toPng(element, {
        quality: 0.75,
        cacheBust: false,
        pixelRatio: 1.5,
        backgroundColor: '#fafaf9',
        style: {
          transform: 'scale(1)',
          transformOrigin: 'top left'
        },
        filter: (node) => {
          return !node.classList?.contains('animate-spin');
        }
      });
      
      const link = document.createElement('a');
      link.download = `爻签-${sign.name}.png`;
      link.href = dataUrl;
      link.click();
      
      setTimeout(() => {
        setIsGenerating(false);
        setShareType(null);
      }, 1500);
    } catch (error) {
      console.error('生成图片失败:', error);
      setIsGenerating(false);
      setShareType(null);
    }
  };

  const handleShareLink = () => {
    try {
      setShareType('link');
      navigator.clipboard.writeText(window.location.href).catch(() => {
        const textarea = document.createElement('textarea');
        textarea.value = window.location.href;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      });
      
      setTimeout(() => {
        setShareType(null);
      }, 1500);
    } catch (error) {
      console.error('复制链接失败:', error);
      setShareType(null);
    }
  };

  const handleShare = (type) => {
    try {
      if (type === 'link') {
        handleShareLink();
      } else if (type === 'weixin') {
        setShareType('weixin');
        setTimeout(() => {
          setShareType(null);
        }, 1500);
      }
    } catch (error) {
      console.error('分享失败:', error);
      setShareType(null);
    }
  };

  if (!sign) {
    return null;
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        sign={sign}
        lunarDate={lunarDate}
        onShare={handleShare}
        onSaveImage={handleShareImage}
        shareType={shareType}
        isGenerating={isGenerating}
      />
      
      <div className="h-screen flex flex-col">
        {/* 左侧装饰 */}
        <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center space-y-8">
          <div className="h-32 w-px bg-stone-200"></div>
          <p className="vertical-text text-xs font-song text-stone-400 tracking-[0.5em] leading-loose">问天明命</p>
          <div className="h-32 w-px bg-stone-200"></div>
        </div>

        {/* 右侧装饰 */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center space-y-8">
          <div className="h-32 w-px bg-stone-200"></div>
          <p className="vertical-text text-xs font-song text-stone-400 tracking-[0.5em] leading-loose">观变知几</p>
          <div className="h-32 w-px bg-stone-200"></div>
        </div>

        <main className="flex-1 flex flex-col items-center justify-center px-6 relative py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-2xl"
          >
            <div ref={signCardRef} className="relative bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-12">
              {/* 返回按钮 */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-8 top-8 p-2 text-stone-400 hover:text-stone-900 transition-colors flex items-center justify-center"
                onClick={() => navigate('/')}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              {/* 分享按钮 */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-8 top-8 p-2 text-stone-400 hover:text-stone-900 transition-colors flex items-center justify-center"
                onClick={() => setIsShareModalOpen(true)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
              </motion.button>

              <div className="text-center space-y-8">
                {/* 日期显示 */}
                <div className="inline-block px-6 py-2 bg-stone-50 rounded-full">
                  <p className="text-sm font-kai text-stone-500 tracking-[0.3em]">
                    {lunarDate.year}年 {lunarDate.month}月{lunarDate.day}
                  </p>
                </div>
                
                {/* 签文等级和名称 */}
                <div className="space-y-4">
                  <h2 className="text-3xl font-kai text-stone-900">{sign.name}</h2>
                </div>

                {/* 签文内容 */}
                <div className={`rounded-2xl p-8 ${
                  sign.level === '上上' ? 'bg-orange-50' :
                  sign.level === '上' ? 'bg-amber-50' :
                  sign.level === '中' ? 'bg-stone-50' :
                  sign.level === '下' ? 'bg-stone-100' :
                  'bg-stone-200'
                }`}>
                  <p className={`text-lg font-kai leading-loose whitespace-pre-line ${
                    sign.level === '上上' ? 'text-orange-800' :
                    sign.level === '上' ? 'text-amber-900' :
                    sign.level === '中' ? 'text-stone-700' :
                    sign.level === '下' ? 'text-stone-800' :
                    'text-stone-900'
                  }`}>
                    {sign.poem}
                  </p>
                </div>

                {/* 签文解释 */}
                <div className="space-y-8 text-left">
                  {/* 解签 */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-song text-stone-400 tracking-[0.3em]">解签</h3>
                    <p className="text-base font-song text-stone-700 leading-relaxed whitespace-pre-line">
                      {sign.explanation}
                    </p>
                  </div>

                  {/* 解释 */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-song text-stone-400 tracking-[0.3em]">解释</h3>
                    <p className="text-base font-song text-stone-700 leading-relaxed whitespace-pre-line">
                      {sign.interpretation}
                    </p>
                  </div>

                  {/* 建议 */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-song text-stone-400 tracking-[0.3em]">建议</h3>
                    <p className="text-base font-song text-stone-700 leading-relaxed whitespace-pre-line">
                      {sign.advice}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {shareType && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-center mt-4 text-sm text-stone-500"
            >
              {shareType === 'image' ? '图片已保存' : '链接已复制'}
            </motion.p>
          )}
        </main>
      </div>
    </div>
  );
};

// 说明页面组件
const InfoPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-stone-50 py-12 px-6">
      <div className="max-w-2xl mx-auto">
        {/* 返回按钮 */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mb-8 p-2 text-stone-400 hover:text-stone-900 transition-colors flex items-center space-x-2"
          onClick={() => navigate('/')}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm font-song">返回首页</span>
        </motion.button>

        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 space-y-8">
          <h1 className="text-2xl font-song text-stone-900 mb-8">说明</h1>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-lg font-song text-stone-900">关于求签</h2>
              <p className="text-base font-song text-stone-600 leading-relaxed">
                求签是中国传统文化中求取神灵指示的一种方式。在现代生活中，可以作为一种自我对话和思考的工具。
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-song text-stone-900">签文解读</h2>
              <p className="text-base font-song text-stone-600 leading-relaxed">
                每支签都包含签诗、解签、解释和建议四个部分。签诗采用传统诗词形式，解签和解释帮助理解含义，建议则给出具体指导。
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-song text-stone-900">注意事项</h2>
              <ul className="text-base font-song text-stone-600 leading-relaxed list-disc pl-6 space-y-2">
                <li>求签结果仅供参考，不应过分依赖</li>
                <li>重要决定应理性分析，综合考虑</li>
                <li>保持平和心态，避免过度解读</li>
                <li>建议每日求签不超过一次</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg font-song text-stone-900">免责声明</h2>
              <p className="text-base font-song text-stone-600 leading-relaxed">
                本应用提供的求签服务仅供娱乐参考，不对因使用本服务而产生的任何问题负责。请用户理性对待求签结果，做出独立判断。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 主页组件
const HomePage = () => {
  const navigate = useNavigate();
  const [isDrawing, setIsDrawing] = useState(false);
  const [lunarDate, setLunarDate] = useState({
    year: '',
    month: '',
    day: ''
  });

  useEffect(() => {
    const updateLunarDate = () => {
      const lunar = Lunar.fromDate(new Date());
      const ganZhi = lunar.getYearInGanZhi();
      const month = lunar.getMonthInChinese();
      const day = lunar.getDayInChinese();
      setLunarDate({
        year: ganZhi,
        month,
        day
      });
    };

    updateLunarDate();
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const timeToTomorrow = tomorrow - now;
    const timer = setTimeout(updateLunarDate, timeToTomorrow);

    return () => clearTimeout(timer);
  }, []);

  const drawSign = () => {
    setIsDrawing(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * signs.length);
      const sign = signs[randomIndex];
      const hash = generateHash();
      
      // 存储签号和哈希值的对应关系
      const signMap = JSON.parse(localStorage.getItem('signMap') || '{}');
      signMap[hash] = sign.id;
      localStorage.setItem('signMap', JSON.stringify(signMap));
      
      setIsDrawing(false);
      navigate(`/sign/${hash}`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="h-screen flex flex-col">
        {/* 左侧装饰 */}
        <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center space-y-8">
          <div className="h-32 w-px bg-stone-200"></div>
          <p className="vertical-text text-xs font-song text-stone-400 tracking-[0.5em] leading-loose">问天明命</p>
          <div className="h-32 w-px bg-stone-200"></div>
        </div>

        {/* 右侧装饰 */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center space-y-8">
          <div className="h-32 w-px bg-stone-200"></div>
          <p className="vertical-text text-xs font-song text-stone-400 tracking-[0.5em] leading-loose">观变知几</p>
          <div className="h-32 w-px bg-stone-200"></div>
        </div>

        {/* 主要内容 */}
        <main className="flex-1 flex flex-col items-center justify-center px-6 relative">
          {/* 说明按钮 */}
          <Link
            to="/info"
            className="absolute right-6 top-6 p-2 text-stone-400 hover:text-stone-900 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </Link>

          {/* 农历日期 */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute top-12 text-center"
          >
            <p className="text-base font-kai text-stone-500 space-x-2">
              <span className="tracking-[0.5em]">{lunarDate.year}年</span>
              <span className="tracking-[0.3em] text-stone-400">{lunarDate.month}月{lunarDate.day}</span>
            </p>
          </motion.div>

          <motion.div
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center"
          >
            <div className="mb-16">
              <h1 className="text-6xl font-kai text-stone-900 mb-8">爻</h1>
              <p className="text-base font-song text-stone-500 tracking-[0.3em] leading-loose max-w-md mx-auto">
                爻者，言乎变者也。效此者也。效天下之动者也。
                <span className="block mt-2 text-stone-400 text-sm">——《易·系辞》</span>
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-12 py-4 bg-stone-900 text-stone-50 rounded-full text-base font-song tracking-[0.3em] hover:bg-stone-800 transition-colors disabled:opacity-50"
              onClick={drawSign}
              disabled={isDrawing}
            >
              {isDrawing ? '求签中...' : '求签'}
            </motion.button>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-16 text-xs font-song text-stone-400 tracking-[0.2em]"
            >
              结果仅供参考，关键时刻还需谨慎判断
            </motion.p>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/info" element={<InfoPage />} />
        <Route path="/sign/:hash" element={<SignResult />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App; 