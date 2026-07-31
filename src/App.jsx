import { Mail, Linkedin, Code, Brain, Award, TrendingUp, Target, Zap, CheckCircle, Calendar, MapPin, Building, Phone, Sparkles, BookOpen } from 'lucide-react';

const Portfolio = () => {
  const experiences = [
    {
      title: "Data Analyst",
      company: "USKY Education",
      period: "April 2026 – Present",
      location: "Visakhapatnam, India",
      type: "EdTech & Analytics",
      description: "Driving data-driven decision making and performance optimization for regional educational web applications.",
      keyResponsibilities: [
        {
          title: "Automated Data Pipelines & Performance",
          details: "Accelerated data loading for regional school web applications by rewriting inefficient database scripts and building automated data cleaning pipelines, cutting response times by 25%. Developed automated processing workflows improving overall data quality.",
          impact: "25% reduction in application response times across regional school platforms"
        },
        {
          title: "AI-Driven Predictive Risk Assessment",
          details: "Built an AI-driven student risk-assessment system achieving 88% prediction accuracy, enabling early teacher intervention to prevent student drop-outs. Translated analytics into actionable educational insights for key stakeholders.",
          impact: "88% prediction accuracy for early drop-out risk intervention"
        },
        {
          title: "Adaptive Recommendation Engine",
          details: "Collaborated with engineering & academic teams to launch an adaptive content recommendation engine, increasing active user engagement by 15%.",
          impact: "15% increase in active student engagement"
        }
      ],
      technologies: ["Python", "SQL", "Pandas", "NumPy", "MySQL", "ETL Pipelines", "Data Analytics"],
      achievements: [
        "Cut application response times by 25% through database script optimization",
        "Achieved 88% accuracy on early student drop-out risk prediction model",
        "Increased active user engagement by 15% with adaptive content recommendations"
      ]
    },
    {
      title: "AI Research Volunteer",
      company: "Education Redesign (Non-profit Organization)",
      period: "August 2025 – Present",
      location: "Visakhapatnam, India",
      type: "Research & Academic Outreach",
      description: "Conducting AI trend research, managing academic outreach, and coordinating content strategy alongside the organization's chairman (Retired Professor, USA).",
      keyResponsibilities: [
        {
          title: "AI Trend Research & Repository Database",
          details: "Researched current AI trends and their projected impact on employment and education, analyzing 100+ academic papers and building a structured database tracking adoption trends and faculty involvement across 15+ industries.",
          impact: "Structured knowledge base of 100+ papers and 15+ industry adoption trends"
        },
        {
          title: "Academic Outreach & Podcast Strategy",
          details: "Coordinated end-to-end academic outreach and podcast operations, including faculty engagement, scheduling, stakeholder communication, logistics, and digital content publication. Benchmarked 20+ AI podcasts to strengthen content and audience strategy.",
          impact: "Strengthened audience reach and engagement with data-backed podcast strategy"
        },
        {
          title: "Expert Discussion Synthesis & Publishing",
          details: "Collaborated with organization chairman to organize expert discussions on AI in education. Synthesized findings into bi-weekly reports with data visualizations, edited videos, published content on YouTube, and maintained research repositories.",
          impact: "Published regular expert insights bridging AI research and educational policy"
        }
      ],
      technologies: ["AI Research", "Python", "Data Visualization", "Faculty Engagement", "Podcast Operations", "Video Editing"],
      achievements: [
        "Analyzed 100+ academic papers and benchmarked 20+ AI podcasts",
        "Built structured database tracking AI adoption across 15+ industries",
        "Coordinated outreach with international university professors & researchers"
      ]
    },
    {
      title: "STEM Outreach & AI Research Intern",
      company: "LuDoS (DST, Govt. of India initiative)",
      period: "July 2024 – April 2026",
      location: "Visakhapatnam, India",
      type: "Government Initiative & AI Research",
      description: "Led R&D for privacy-preserving AI chatbots and coordinated large-scale STEM outreach programs across government schools under DST initiative.",
      keyResponsibilities: [
        {
          title: "Offline AI Chatbot R&D",
          details: "Led R&D team for an offline AI chatbot application, ensuring complete data privacy and mitigating model hallucinations for educational environments.",
          impact: "Privacy-preserving offline AI solution tailored for underserved schools"
        },
        {
          title: "STEM Outreach & Workshop Execution",
          details: "Coordinated STEM outreach programs, AI workshops, and science exhibitions across government schools. Managed planning, scheduling, logistics, transportation of exhibition projects, on-site execution, and participant hospitality.",
          impact: "Delivered hands-on sessions for 10+ government schools & 50+ teachers"
        },
        {
          title: "Bridging the Digital Divide",
          details: "Coordinated with faculty, school administrators, teachers, and students to deliver hands-on AI/ML learning sessions, bridging the digital divide in underserved schools.",
          impact: "Direct positive impact on tech awareness among underserved students"
        }
      ],
      technologies: ["Python", "AI/ML", "NLP", "Offline LLMs", "Project Management", "STEM Curriculum"],
      achievements: [
        "Led R&D for privacy-preserving offline AI chatbot",
        "Organized science exhibitions & workshops for 10+ government schools and 50+ teachers",
        "Managed end-to-end logistics, scheduling, and stakeholder coordination for DST initiative"
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "Defence Research & Development Organisation (DRDO)",
      period: "May 2025 – June 2025",
      location: "Hyderabad, India",
      type: "Defense R&D",
      description: "Architected secure offline AI systems for classified defense applications with strict sub-second performance and privacy constraints.",
      keyResponsibilities: [
        {
          title: "Secure Offline AI Chatbot Architecture",
          details: "Implemented and evaluated a secure offline AI chatbot using Ollama framework and DeepSeek-R1:8B language model with a custom GUI, reducing query response time by 30% and achieving sub-second response times.",
          impact: "30% reduction in query response time with sub-second performance"
        },
        {
          title: "Validation & Performance Scenarios",
          details: "Conducted 50+ test and validation scenarios analyzing performance metrics, system reliability, and usability, achieving 95%+ user satisfaction for defense applications.",
          impact: "95%+ user satisfaction score across 50+ validation scenarios"
        }
      ],
      technologies: ["Python", "Ollama", "DeepSeek-R1:8B", "NLP", "GUI Development", "Defense Security"],
      achievements: [
        "Achieved sub-second query latency on air-gapped defense system",
        "30% speedup in AI query response times",
        "95%+ user satisfaction in rigorous DRDO validation testing"
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "Rashtriya Ispat Nigam Limited (RINL)",
      period: "May 2024 – June 2024",
      location: "Visakhapatnam, India",
      type: "Manufacturing Analytics",
      description: "Applied machine learning and predictive analytics to optimize blast furnace operations at India's largest steel manufacturing plant.",
      keyResponsibilities: [
        {
          title: "Predictive Production Forecasting",
          details: "Developed time-series forecasting models predicting blast furnace production and sales metrics using 50,000+ historical records spanning 2+ years. Achieved 5% improvement over baseline methods.",
          impact: "5% forecast accuracy improvement on 50,000+ historical production records"
        },
        {
          title: "Operational Efficiency & Bottleneck Analysis",
          details: "Conducted deep-dive analysis of production trends, capacity utilization rates, and operational parameters using SQL and Python (Pandas, NumPy), identifying a 10% efficiency gap.",
          impact: "Identified 10% efficiency gap with actionable KPI recommendations"
        },
        {
          title: "Data Pipeline Automation",
          details: "Built an end-to-end automated ETL pipeline transforming raw sensor data into structured analysis datasets, cutting daily manual data preparation time from 4 hours to 30 minutes.",
          impact: "Automated daily ETL pipeline saving 3.5 hours of manual work every day"
        }
      ],
      technologies: ["Python", "Scikit-learn", "SQL", "Pandas", "NumPy", "Time-Series Analysis", "ETL Pipelines"],
      achievements: [
        "Improved production forecast accuracy by 5% on 50,000+ historical records",
        "Identified 10% efficiency gap with actionable operational recommendations",
        "Automated daily sensor data pipeline saving 3.5 hours daily"
      ]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Automated Image Captioning for Visually Impaired",
      tagline: "Accessibility AI • Computer Vision • Deep Learning Benchmarking",
      duration: "Aug 2025 - Apr 2026",
      status: "Capstone Project - High BLEU-1 Precision",
      
      overview: "Built an end-to-end image captioning system achieving 49% BLEU-1 accuracy, benchmarking 4 distinct deep learning architectures: VGG16+LSTM, InceptionV3+LSTM, ViT-GPT2, and BLIP. Deployed an accessible web app integrated with text-to-speech for visually impaired accessibility.",
      
      problemStatement: {
        challenge: "Visually impaired individuals struggle to access image-based digital content due to missing or non-descriptive alt-text across websites and educational materials.",
        goal: "Develop a fast, highly accurate vision-language system that automatically generates natural descriptions and converts them into spoken audio in under 2 seconds.",
        constraints: ["Sub-2-second end-to-end response time", "High precision across diverse scenes and objects", "Text-To-Speech audio output for accessibility"]
      },
      
      technicalApproach: {
        dataset: "Flickr8k dataset containing 40,455 annotated image-caption pairs.",
        
        architectures: [
          {
            name: "VGG16 + LSTM",
            description: "CNN feature extractor with LSTM sequence model baseline",
            performance: "BLEU-1: 0.42",
            insights: "Good baseline for simple objects"
          },
          {
            name: "InceptionV3 + LSTM",
            description: "Multi-scale feature extraction for granular detail",
            performance: "BLEU-1: 0.45",
            insights: "Better object feature representation"
          },
          {
            name: "ViT-GPT2",
            description: "Vision Transformer combined with GPT-2 decoder",
            performance: "BLEU-1: 0.47",
            insights: "Stronger context generation capability"
          },
          {
            name: "BLIP (Selected Architecture)",
            description: "Bootstrapping Language-Image Pre-training vision-language model",
            performance: "BLEU-1: 0.49",
            insights: "Highest overall accuracy and superior generalization"
          }
        ],
        
        implementation: [
          "Benchmarked 4 state-of-the-art vision-language model combinations on 40,455 image-caption pairs",
          "Engineered text-to-speech synthesis pipeline for instant audio conversion",
          "Optimized model inference pipeline achieving <2 second response latency per image request"
        ]
      },
      
      deployment: {
        platform: "Streamlit Web Application",
        features: [
          "Real-time image upload and instant caption synthesis",
          "Integrated Text-To-Speech (TTS) audio narration",
          "Confidence scoring and history tracking"
        ],
        performance: "Processed 40,455 image-caption pairs with <2s response time"
      },
      
      results: {
        quantitative: [
          "49% BLEU-1 accuracy across benchmarked models",
          "Evaluated on 40,455 image-caption pairs",
          "<2 second total pipeline latency"
        ],
        qualitative: [
          "Natural, grammatically accurate descriptions suited for screen-readers",
          "Robust performance across diverse real-world scenes"
        ]
      },
      
      impact: "Delivered a practical accessibility solution combining modern vision transformers with audio synthesis to assist visually impaired users.",
      
      learnings: [
        "Pre-trained vision-language models like BLIP significantly outpace traditional CNN-LSTM hybrids",
        "Sub-second audio synthesis is essential for real-world accessibility usability"
      ],
      
      technologies: ["Python", "PyTorch", "Transformers", "BLIP", "ViT-GPT2", "VGG16", "InceptionV3", "LSTM", "Streamlit", "Text-to-Speech"],
      github: "https://github.com/tanmaysadineni/portfolio",
      demo: "Available upon request"
    },
    {
      id: 2,
      title: "AI-Driven Traffic Prediction and Management System",
      tagline: "Smart Cities • Machine Learning • Smart India Hackathon Top 10 Finalist",
      duration: "Smart India Hackathon 2024",
      status: "Top 10 Finalist Nationwide (out of 1000+ Teams)",
      
      overview: "Designed and built an intelligent traffic forecast and route optimization system. Improved traffic prediction accuracy by 15% using real-time data, weather, and historical patterns, while reducing travel delays by 20% using Dijkstra's algorithm integrated with Google Maps APIs.",
      
      problemStatement: {
        challenge: "Severe urban traffic congestion leads to major economic losses and delay in emergency response times.",
        goal: "Build a predictive system forecasting traffic disruptions and proposing delay-reducing dynamic route recommendations.",
        constraints: ["Real-time API data streams", "Dynamic graph rerouting", "24-hour hackathon execution window"]
      },
      
      technicalApproach: {
        dataIntegration: [
          "Integrated Google Maps Traffic API for live congestion data",
          "OpenWeather API integration for weather-affected traffic predictions",
          "Historical congestion pattern mining across peak commute hours"
        ],
        predictionModel: [
          "Ensemble machine learning models trained on multi-source sensor and API data",
          "Improved forecast accuracy by 15% over historical baselines"
        ],
        routeOptimization: [
          "Dynamic graph modeling of city intersection networks",
          "Engineered route recommendation engine with Dijkstra's algorithm reducing delay times by 20%"
        ]
      },
      
      results: {
        quantitative: [
          "15% increase in traffic forecast accuracy",
          "20% reduction in travel delays via optimized routing algorithms",
          "Top 10 team finish nationwide in Smart India Hackathon 2024 out of 1000+ teams"
        ],
        achievement: "Recognized as Top 10 Finalist Nationwide at Smart India Hackathon 2024"
      },
      
      impact: "Demonstrated city-scale machine learning and real-time graph optimization under competitive national hackathon conditions.",
      
      learnings: [
        "Dynamic edge weighting in Dijkstra's algorithm drastically improves real-world navigation accuracy",
        "Multi-modal feature fusion (weather + historical + live traffic) yields resilient forecasts"
      ],
      
      technologies: ["Python", "Machine Learning", "Dijkstra's Algorithm", "Google Maps API", "OpenWeather API", "Flask", "SQL"],
      github: "https://github.com/tanmaysadineni/portfolio",
      presentation: "Available upon request"
    },
    {
      id: 3,
      title: "Voice Enabled Multilingual Chatbot",
      tagline: "Speech AI • Multilingual Translation • Real-Time Audio Synthesis",
      duration: "Recent Innovation Project",
      status: "Production Prototype",
      
      overview: "Engineered an end-to-end voice chatbot integrating Speech-to-Text, LLMs, and Text-to-Speech for real-time multilingual conversation, backed by a seamless translation pipeline processing audio responses across multiple languages.",
      
      problemStatement: {
        challenge: "Language barriers restrict access to modern conversational AI tools for non-English speakers and low-literacy communities.",
        goal: "Build a real-time conversational voice assistant capable of listening, translating, reasoning, and speaking back in the user's native language.",
        constraints: ["Low audio latency", "High speech-to-text accuracy", "Seamless cross-lingual translation"]
      },
      
      technicalApproach: {
        implementation: [
          "Integrated Speech-to-Text (STT) models for noisy audio transcriptions",
          "Engineered translation pipeline converting user queries to target LLM context",
          "Connected LLMs with Text-to-Speech (TTS) engines for localized, natural voice response generation"
        ]
      },
      
      deployment: {
        platform: "Full-Stack Python Audio Pipeline Application",
        features: [
          "Real-time voice input capture",
          "Automated language identification and cross-translation",
          "Natural audio response synthesis"
        ]
      },
      
      results: {
        quantitative: [
          "Seamless end-to-end processing across multiple languages",
          "Real-time audio response synthesis with high translation fidelity"
        ]
      },
      
      impact: "Created an inclusive voice interface breaking language barriers for AI interaction.",
      
      learnings: [
        "Asynchronous audio processing is essential to prevent latency lag in voice conversations",
        "Nuanced prompt engineering maintains translation context across multilingual turns"
      ],
      
      technologies: ["Python", "Speech-to-Text", "LLMs", "Text-to-Speech", "NLP", "Translation APIs"],
      github: "https://github.com/tanmaysadineni/portfolio",
      demo: "Available upon request"
    },
    {
      id: 4,
      title: "Credit Card Fraud Detection System",
      tagline: "Financial Security • Imbalanced ML • REST API Deployment",
      duration: "Personal ML Project",
      status: "Production Deployment",
      
      overview: "Engineered a machine learning system detecting fraudulent credit card transactions in real-time. Addressed extreme class imbalance (fraud <0.2%) using SMOTE oversampling while maintaining 94% precision to minimize customer friction.",
      
      problemStatement: {
        challenge: "Financial fraud causes massive global losses, but rule-based systems generate high false positives. ML models must handle extreme class imbalance without blocking legitimate transactions.",
        goal: "Build a real-time fraud detection pipeline achieving >90% precision and recall with sub-100ms inference latency.",
        constraints: ["Handle 0.17% class imbalance", "Minimize false positives", "<100ms latency requirement"]
      },
      
      technicalApproach: {
        implementation: [
          "Applied SMOTE (Synthetic Minority Over-sampling Technique) to balance training distributions",
          "Evaluated Logistic Regression, Random Forest, and XGBoost models",
          "Selected Logistic Regression for optimal balance of speed (45ms latency), interpretability, and 94% precision"
        ]
      },
      
      deployment: {
        platform: "Flask REST API deployed on cloud infrastructure",
        performance: "45ms average latency per transaction"
      },
      
      results: {
        quantitative: [
          "94% precision and 89% recall on test dataset",
          "0.96 AUC-ROC score demonstrating superior fraud discrimination",
          "45ms average processing latency per query"
        ]
      },
      
      impact: "Demonstrated end-to-end ML engineering from imbalanced data handling to real-time REST API model deployment.",
      
      learnings: [
        "Class imbalance requires SMOTE and precision/recall evaluation over raw accuracy metrics",
        "Model decision thresholds can be tuned directly to align with business loss targets"
      ],
      
      technologies: ["Python", "Scikit-learn", "SMOTE", "Pandas", "Flask", "REST API", "SQL"],
      github: "https://github.com/tanmaysadineni/portfolio",
      demo: "Available upon request"
    }
  ];

  const skillCategories = [
    {
      title: "AI & Engineering",
      icon: <Brain className="w-5 h-5 text-blue-600" />,
      skills: ["Python", "C", "Java", "SQL", "PyTorch", "Transformers", "NLP", "REST APIs", "Git", "Ollama", "DeepSeek-R1"]
    },
    {
      title: "Data & Cloud",
      icon: <TrendingUp className="w-5 h-5 text-green-600" />,
      skills: ["JavaScript", "HTML/CSS", "Pandas", "NumPy", "MySQL", "AWS", "Flask", "Streamlit", "ETL Pipelines", "Data Analytics"]
    },
    {
      title: "Project & Program Management",
      icon: <Building className="w-5 h-5 text-purple-600" />,
      skills: ["Project Coordination", "Stakeholder Management", "Academic Outreach", "Event Management", "Faculty Engagement", "Logistics"]
    },
    {
      title: "Research & Documentation",
      icon: <BookOpen className="w-5 h-5 text-orange-600" />,
      skills: ["AI Research", "Documentation", "Report Writing", "Data Management", "Podcast Operations", "Video Editing"]
    }
  ];

  const coreTraits = [
    "High agency & initiative",
    "Naturally curious & fast learner",
    "Open-minded critical thinker",
    "Passionate about AI & emerging tech",
    "Adept at bridging tech and education"
  ];

  const education = {
    degree: "Bachelor of Technology (Computer Science & Engineering)",
    university: "GITAM University",
    location: "Visakhapatnam, India",
    period: "Sep 2022 – Jun 2026",
    cgpa: "9.43 / 10",
    coursework: [
      "AI & Machine Learning",
      "Business Analytics",
      "Software Engineering",
      "Operating Systems",
      "Algorithms",
      "Database Management Systems (DBMS)",
      "Probability & Statistics"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center font-bold text-white shadow-md">
                TS
              </div>
              <div>
                <div className="font-bold text-lg text-gray-900 leading-tight">Tanmay Sai Sadineni</div>
                <div className="text-xs text-gray-500 font-medium">Data Analyst • AI & ML Engineer</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#projects" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#skills" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#contact" className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold mb-6 border border-blue-100">
            <Sparkles className="w-4 h-4 text-blue-600" />
            Computer Science & Engineering • GITAM University (GPA: 9.43/10)
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Tanmay Sai Sadineni<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              AI Solutions, Data Analytics & Program Coordination
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl leading-relaxed">
            I have been trusted with real responsibility across a defense lab (<span className="font-semibold text-gray-900">DRDO</span>), 
            a Government of India science department initiative (<span className="font-semibold text-gray-900">LuDoS / DST</span>), 
            an AI EdTech company (<span className="font-semibold text-gray-900">USKY Education</span>), and an education research non-profit (<span className="font-semibold text-gray-900">Education Redesign</span>). 
            I build practical AI solutions, optimize data pipelines, and bridge technical innovation with impactful program execution.
          </p>

          {/* Quick Highlight Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
              <div className="text-3xl font-extrabold text-blue-600 mb-1">9.43</div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">CGPA / 10</div>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
              <div className="text-3xl font-extrabold text-indigo-600 mb-1">4</div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Key Roles / Internships</div>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
              <div className="text-3xl font-extrabold text-blue-600 mb-1">Top 10</div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Smart India Hackathon</div>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
              <div className="text-3xl font-extrabold text-indigo-600 mb-1">88%</div>
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Risk Model Accuracy</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="mailto:tanmaysadineni@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-md">
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
            <a href="https://linkedin.com/in/tanmay-sai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-800 font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-sm border border-gray-200">
              <Linkedin className="w-5 h-5 text-blue-600" />
              LinkedIn Profile
            </a>
            <a href="tel:+917981073388" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-800 font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-sm border border-gray-200">
              <Phone className="w-5 h-5 text-green-600" />
              +91 7981073388
            </a>
          </div>
        </div>
      </section>

      {/* Summary Statements Section */}
      <section className="py-12 bg-gradient-to-r from-blue-900 to-indigo-950 text-white px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-semibold text-blue-200 mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-400" />
            Core Driving Principles & Experience Highlights
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <div className="text-blue-400 font-bold text-lg mb-2">Real Responsibility</div>
              <p className="text-sm text-blue-100 leading-relaxed">
                Trusted with mission-critical tasks across DRDO defense lab, Government of India (LuDoS/DST), USKY EdTech, and Education Redesign.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <div className="text-blue-400 font-bold text-lg mb-2">High Agency Problem Solving</div>
              <p className="text-sm text-blue-100 leading-relaxed">
                A habit of noticing gaps others miss—following through with data pipelines, AI models, and real solutions.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <div className="text-blue-400 font-bold text-lg mb-2">Adaptable Communication</div>
              <p className="text-sm text-blue-100 leading-relaxed">
                Experience standing in front of rooms of teachers, government officials, and researchers, tailoring technical explanations to any audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Work Experience</h2>
            <p className="text-lg text-gray-600">Track record of delivering AI solutions, analytics pipelines, and technical coordination</p>
          </div>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-md transition-all border border-gray-200">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                      {exp.type}
                    </span>
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-blue-700 font-bold text-base mb-2">
                      <Building className="w-4 h-4" />
                      {exp.company}
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 font-medium leading-relaxed">{exp.description}</p>

                <div className="space-y-4 mb-6">
                  {exp.keyResponsibilities.map((resp, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-4 border border-gray-200/80 shadow-2xs">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">{resp.title}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed mb-2">{resp.details}</p>
                      <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                        <Target className="w-3.5 h-3.5" />
                        Key Result: {resp.impact}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white text-gray-700 text-xs font-semibold rounded-md border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="bg-blue-50/60 rounded-xl p-4 border border-blue-100">
                  <div className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">Key Achievements:</div>
                  <ul className="space-y-1.5">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Featured Technical Projects</h2>
            <p className="text-lg text-gray-600">Deep dives into machine learning, computer vision, speech AI, and optimization systems</p>
          </div>

          <div className="space-y-12">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
                <div className="bg-gradient-to-r from-blue-700 to-indigo-800 p-8 text-white">
                  <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                    {project.status}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-2">{project.title}</h3>
                  <p className="text-blue-100 text-sm md:text-base mb-4 font-medium">{project.tagline}</p>
                  <div className="flex items-center gap-2 text-xs text-blue-200 font-semibold">
                    <Calendar className="w-4 h-4" />
                    {project.duration}
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Project Overview</h4>
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed">{project.overview}</p>
                  </div>

                  <div className="mb-6 bg-blue-50/50 border border-blue-100 rounded-xl p-5">
                    <h4 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Target className="w-4 h-4 text-blue-600" />
                      Problem & Objective
                    </h4>
                    <div className="space-y-2 text-sm text-gray-700">
                      <p><span className="font-semibold text-gray-900">Challenge:</span> {project.problemStatement.challenge}</p>
                      <p><span className="font-semibold text-gray-900">Goal:</span> {project.problemStatement.goal}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <Code className="w-5 h-5 text-blue-600" />
                      Technical Implementation
                    </h4>
                    
                    {project.technicalApproach.architectures && (
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        {project.technicalApproach.architectures.map((arch, idx) => (
                          <div key={idx} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                            <div className="font-bold text-gray-900 text-sm mb-1">{arch.name}</div>
                            <p className="text-xs text-gray-600 mb-2">{arch.description}</p>
                            <div className="text-xs text-blue-700 font-bold mb-1">{arch.performance}</div>
                            <p className="text-xs text-gray-700">{arch.insights}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {project.technicalApproach.implementation && (
                      <ul className="space-y-2 mb-4">
                        {project.technicalApproach.implementation.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <Zap className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {project.technicalApproach.predictionModel && (
                      <ul className="space-y-2 mb-4">
                        {project.technicalApproach.predictionModel.concat(project.technicalApproach.routeOptimization || []).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <Zap className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Key Results & Impact</h4>
                    <ul className="space-y-2 mb-4">
                      {project.results.quantitative.map((res, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <TrendingUp className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="font-medium">{res}</span>
                        </li>
                      ))}
                    </ul>
                    {project.results.achievement && (
                      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm font-semibold text-amber-900 flex items-center gap-2">
                        <Award className="w-5 h-5 text-amber-600 flex-shrink-0" />
                        <span>{project.results.achievement}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-semibold rounded-md border border-gray-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section id="skills" className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Skills & Core Competencies</h2>
            <p className="text-lg text-gray-600">Technical proficiency across AI, data analytics, cloud, and project coordination</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white rounded-xl shadow-2xs border border-gray-200">
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1.5 bg-white text-gray-800 text-xs font-semibold rounded-lg border border-gray-200 shadow-2xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core Personal Traits */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-600" />
              Core Traits & Mindset
            </h3>
            <div className="flex flex-wrap gap-3">
              {coreTraits.map((trait, idx) => (
                <div key={idx} className="px-4 py-2 bg-white text-blue-900 text-sm font-semibold rounded-xl border border-blue-200 shadow-2xs flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  {trait}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Education</h2>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-extrabold text-gray-900">{education.degree}</h3>
                <div className="text-blue-700 font-bold text-base">{education.university} • {education.location}</div>
              </div>
              <div className="mt-2 md:mt-0 text-left md:text-right">
                <div className="text-xs font-semibold text-gray-500">{education.period}</div>
                <div className="text-lg font-extrabold text-blue-600">CGPA: {education.cgpa}</div>
              </div>
            </div>

            <div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Relevant Coursework:</div>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-50 text-gray-800 text-xs font-semibold rounded-md border border-gray-200">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Open for full-time opportunities in <span className="font-semibold text-gray-900">Data Analytics, Machine Learning Engineering, AI Research, and Technical Program Coordination</span>.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a href="mailto:tanmaysadineni@gmail.com" className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-md">
              <Mail className="w-5 h-5" />
              tanmaysadineni@gmail.com
            </a>
            <a href="tel:+917981073388" className="inline-flex items-center gap-2 px-6 py-3.5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors shadow-md">
              <Phone className="w-5 h-5 text-green-400" />
              +91 7981073388
            </a>
            <a href="https://linkedin.com/in/tanmay-sai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3.5 bg-blue-800 text-white font-semibold rounded-xl hover:bg-blue-900 transition-colors shadow-md">
              <Linkedin className="w-5 h-5" />
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-400">
          <p>© 2026 Tanmay Sai Sadineni • Computer Science & Engineering, GITAM University</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;