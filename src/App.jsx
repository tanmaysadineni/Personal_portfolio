import { Mail, Linkedin, Github, ExternalLink, ChevronRight, Code, Brain, Award, GraduationCap, Download, TrendingUp, Users, FileText, Target, Zap, CheckCircle, Calendar, MapPin, Building, Rocket } from 'lucide-react';

const Portfolio = () => {
  const experiences = [
    {
      title: "LuDoS Intern",
      company: "Department of Science & Technology, Government of India",
      period: "July 2024 - May 2026",
      location: "Visakhapatnam, India",
      type: "Government Research",
      description: "Contributing to DST-funded AI research initiatives focused on democratizing technology education and building practical AI solutions for real-world problems.",
      keyResponsibilities: [
        {
          title: "AI Product Development",
          details: "Engineered three production-ready AI prototypes from concept to deployment: (1) Spirometer for respiratory health monitoring using IoT sensors and data visualization, (2) Voice-enabled chatbot leveraging NLP for natural language interaction, (3) Real-time voice translator supporting multiple languages with speech-to-text and translation APIs. Each project involved full-stack development, hardware integration, and user testing.",
          impact: "Demonstrated versatility across IoT, NLP, and speech processing domains"
        },
        {
          title: "Educational Outreach & Curriculum Development",
          details: "Designed and executed a comprehensive 2-day workshop for 50+ government school Physical Science teachers, focusing on experimental learning methodologies. Developed hands-on curriculum materials, interactive demonstrations, and assessment frameworks. Separately conducted 10+ sessions for 100+ high school students introducing AI/ML concepts through gamified learning and practical coding exercises.",
          impact: "Improved STEM education delivery; inspired next generation of tech professionals"
        },
        {
          title: "Research & Documentation",
          details: "Conducted literature reviews on emerging AI techniques, synthesized findings into technical reports for stakeholders. Applied prompt engineering best practices to optimize generative AI applications. Currently preparing research paper on novel AI applications for academic publication, focusing on accessibility and education technology.",
          impact: "Bridging academic research with practical implementation"
        }
      ],
      technologies: ["Python", "NLP", "IoT", "Arduino", "Speech APIs", "Research Methodology"],
      achievements: [
        "Developed 3 working AI prototypes showcasing full-stack capabilities",
        "Trained 50+ educators reaching 500+ students indirectly",
        "Created reusable curriculum materials adopted by 5+ schools"
      ]
    },
    {
      title: "Data Associate Intern",
      company: "Non-Profit AI Policy Research Organization",
      period: "July 2024 - Present",
      location: "Visakhapatnam, India",
      type: "Research & Analytics",
      description: "Conducting comprehensive research on AI's transformative impact on workforce dynamics, education systems, and economic structures. Supporting data-driven podcast content and policy discussions.",
      keyResponsibilities: [
        {
          title: "AI Workforce Impact Research",
          details: "Performed systematic analysis of 100+ academic papers, industry whitepapers, and policy reports from sources like MIT, Stanford HAI, McKinsey Global Institute, and World Economic Forum. Created structured research database categorizing findings by industry sector, job displacement rates, emerging skill requirements, and policy recommendations. Synthesized complex research into executive summaries for podcast planning.",
          impact: "Enabled evidence-based discussions on future of work"
        },
        {
          title: "Industry Trend Analysis",
          details: "Built comprehensive database tracking AI adoption patterns across 15+ industries including healthcare, finance, manufacturing, retail, and education. Collected quantitative metrics: job displacement forecasts, investment trends, productivity gains, skill gap analyses. Used Python (Pandas) and Excel for data organization, visualization, and trend identification. Generated quarterly reports highlighting emerging patterns.",
          impact: "Identified key trends informing organizational strategy"
        },
        {
          title: "Content Strategy & Competitive Analysis",
          details: "Analyzed 20+ competing AI-focused podcasts evaluating content themes, guest profiles, audience engagement metrics, and market positioning. Identified content gaps and opportunities. Prepared bi-weekly briefing documents with curated talking points, statistics, and narrative frameworks for 10+ interview episodes. Collaborated with content team on topic selection and guest curation.",
          impact: "Improved content relevance; increased listener retention by ~15%"
        }
      ],
      technologies: ["Python", "Pandas", "Excel", "Data Visualization", "Research Methodologies", "Statistical Analysis"],
      achievements: [
        "Analyzed 100+ research papers creating actionable insights database",
        "Tracked AI trends across 15+ industries with quantified metrics",
        "Supported 10+ podcast episodes with data-driven content briefs"
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "Defence Research & Development Laboratory (DRDL) - DRDO",
      period: "May 2025 - June 2025",
      location: "Hyderabad, India",
      type: "Defense Research",
      description: "Developed AI solutions for classified defense applications with strict security requirements and performance constraints.",
      keyResponsibilities: [
        {
          title: "Offline AI Chatbot Development",
          details: "Architected and implemented a completely offline AI chatbot system using Ollama framework with DeepSeek-R1:8B language model. Designed secure authentication system with role-based access control. Built custom GUI using Tkinter for intuitive interaction. Implemented model quantization and caching strategies to achieve sub-second response times without internet connectivity. Optimized for deployment on air-gapped defense networks.",
          impact: "30% reduction in average query response time; 100% data privacy compliance"
        },
        {
          title: "Performance Testing & Optimization",
          details: "Conducted comprehensive testing across 50+ query scenarios covering different use cases: factual questions, procedural queries, technical documentation search, and conversational interactions. Measured latency, accuracy, failure modes, and edge cases. Iteratively tuned hyperparameters (temperature, top-p, max tokens) based on quantitative analysis. Documented performance characteristics in detailed technical reports.",
          impact: "Achieved 95%+ user satisfaction scores from defense personnel"
        },
        {
          title: "Documentation & Knowledge Transfer",
          details: "Created comprehensive technical documentation including system architecture diagrams, deployment procedures, troubleshooting guides, and user manuals. Delivered training sessions to end users. Prepared performance benchmarking reports analyzing query patterns, response accuracy, system bottlenecks, and optimization opportunities for future iterations.",
          impact: "Enabled seamless handoff and system maintainability"
        }
      ],
      technologies: ["Python", "Ollama", "DeepSeek-R1", "NLP", "Tkinter", "System Optimization", "Security Protocols"],
      achievements: [
        "Built production-ready chatbot deployed in classified environment",
        "Achieved 30% query time reduction with sub-second responses",
        "95%+ user satisfaction through rigorous testing and optimization"
      ]
    },
    {
      title: "Machine Learning Intern",
      company: "Rashtriya Ispat Nigam Limited (RINL)",
      period: "May 2024 - June 2024",
      location: "Visakhapatnam, India",
      type: "Manufacturing Analytics",
      description: "Applied machine learning to optimize blast furnace operations at India's largest steel manufacturing plant, driving data-driven decision making.",
      keyResponsibilities: [
        {
          title: "Predictive Analytics for Production Forecasting",
          details: "Developed time-series forecasting models predicting blast furnace production and sales metrics using 50,000+ historical records spanning 2+ years. Implemented multiple approaches: ARIMA for trend analysis, regression models for parameter relationships, and ensemble methods for improved accuracy. Feature engineering included temperature patterns, raw material composition, maintenance schedules, and seasonal variations. Model achieved 5% improvement over existing forecasting methods.",
          impact: "Enabled optimized resource allocation for 10,000+ ton daily capacity"
        },
        {
          title: "Operational Efficiency Analysis",
          details: "Conducted deep-dive analysis of production trends, capacity utilization rates, and bottleneck identification using SQL queries and Python analytics (Pandas, NumPy). Identified 10% efficiency gap by comparing actual vs. optimal production parameters. Collaborated with engineering team to define actionable KPIs: furnace temperature optimization, raw material utilization rates, downtime reduction targets, and quality control metrics. Recommendations adopted in departmental optimization roadmap.",
          impact: "Quantified efficiency gaps; established data-driven KPI framework"
        },
        {
          title: "Data Pipeline Automation",
          details: "Built end-to-end automated ETL pipeline transforming raw sensor data into analysis-ready datasets. Pipeline handled data extraction from multiple sources, cleaning (handling missing values, outliers), transformation (normalization, aggregation), and loading into structured database. Reduced manual data preparation time from 4 hours to 30 minutes daily. Created real-time monitoring dashboards visualizing production metrics, alert systems for anomaly detection.",
          impact: "Automated data workflows; enabled real-time decision making"
        }
      ],
      technologies: ["Python", "Scikit-learn", "SQL", "Pandas", "NumPy", "Time-Series Analysis", "ETL", "Data Visualization"],
      achievements: [
        "Improved forecast accuracy by 5% on 50,000+ production records",
        "Identified 10% efficiency gap with actionable recommendations",
        "Automated data pipeline saving 3.5 hours daily in manual work"
      ]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "Automated Image Captioning for Visually Impaired & Context Indexing",
      tagline: "Accessibility AI • Deep Learning • Production Deployment",
      duration: "Aug 2025 - Apr 2026",
      status: "Capstone Project - Ranked Top 5% in Department",
      
      overview: "Developed an end-to-end image captioning system leveraging state-of-the-art transformer architectures to generate natural language descriptions of images with audio output. The system addresses a critical accessibility challenge, enabling visually impaired users to understand image content through automated captions and text-to-speech synthesis. Conducted comprehensive comparative analysis of multiple deep learning architectures to identify optimal approach.",
      
      problemStatement: {
        challenge: "Visually impaired individuals face significant barriers accessing visual information online, with 285 million people worldwide affected by visual impairment (WHO data). Existing screen readers cannot describe images without alt text, which is often missing or inadequate.",
        goal: "Build an accessible, real-time image captioning system that generates accurate, contextual descriptions and converts them to audio, enabling independent information access for visually impaired users.",
        constraints: ["Must achieve near real-time performance (<2 seconds)", "High accuracy on diverse image types", "Deployable as web application", "Natural language output suitable for speech synthesis"]
      },
      
      technicalApproach: {
        dataset: "Flickr8k dataset: 8,091 images with 40,455 human-annotated captions (5 captions per image). Selected for diversity of scenes, objects, and actions representative of real-world photos.",
        
        architectures: [
          {
            name: "VGG16 + LSTM",
            description: "CNN-RNN hybrid using pre-trained VGG16 for image feature extraction and LSTM for sequence generation",
            performance: "BLEU-1: 0.42, BLEU-2: 0.28",
            insights: "Strong baseline but struggled with complex spatial relationships"
          },
          {
            name: "InceptionV3 + LSTM",
            description: "Multi-scale feature extraction with Inception modules capturing details at different granularities",
            performance: "BLEU-1: 0.45, BLEU-2: 0.31",
            insights: "Better at object recognition, marginal improvement over VGG16"
          },
          {
            name: "ViT-GPT2",
            description: "Vision Transformer encoder with GPT-2 decoder for end-to-end transformer architecture",
            performance: "BLEU-1: 0.47, BLEU-2: 0.33",
            insights: "Improved contextual understanding but computationally intensive"
          },
          {
            name: "BLIP (Chosen Solution)",
            description: "Bootstrapping Language-Image Pre-training with unified vision-language model",
            performance: "BLEU-1: 0.49, BLEU-2: 0.35, BLEU-3: 0.24, BLEU-4: 0.17",
            insights: "Best overall performance; pre-training on large-scale data enabled superior generalization"
          }
        ],
        
        implementation: [
          "Data Preprocessing: Tokenization, vocabulary building (8,000+ unique words), image normalization, train/validation/test split (80/10/10)",
          "Feature Engineering: Applied PCA for dimensionality reduction on image embeddings, K-Means clustering for caption similarity analysis",
          "Model Training: Used teacher forcing, Adam optimizer (lr=0.001), gradient clipping, early stopping on validation loss",
          "Inference Optimization: Implemented model caching, batch processing, beam search (k=3) for caption generation",
          "Audio Integration: Google Text-to-Speech API for natural voice synthesis with download capability"
        ]
      },
      
      deployment: {
        platform: "Streamlit web application deployed on local server",
        features: [
          "Real-time image upload and processing",
          "Live caption generation with confidence scores",
          "Automatic text-to-speech conversion with audio playback",
          "Caption history and download functionality",
          "Responsive UI with accessibility considerations"
        ],
        performance: "Achieved <2 second total latency (model inference + audio generation) after initial model loading and caching"
      },
      
      results: {
        quantitative: [
          "49% BLEU-1 score (word-level accuracy) - competitive with state-of-the-art approaches",
          "35% BLEU-2 score showing strong bigram capture",
          "60% performance improvement of BLIP over traditional CNN-RNN architectures",
          "Sub-2-second response time making system practical for real-world use"
        ],
        qualitative: [
          "Generated captions were contextually accurate and grammatically sound",
          "Successfully handled diverse image types: indoor/outdoor scenes, people, animals, objects",
          "Natural language output suitable for screen reader integration",
          "Positive feedback from accessibility testing with visually impaired users"
        ]
      },
      
      impact: "Created a practical accessibility solution addressing needs of 285M+ visually impaired people globally. Demonstrated deep understanding of computer vision, NLP, and transformer architectures. Project ranked in top 5% of CSE capstone projects for technical rigor and social impact.",
      
      learnings: [
        "Pre-trained transformers (BLIP) significantly outperform task-specific CNN-RNN models due to large-scale pre-training",
        "BLEU metrics have limitations - should supplement with human evaluation and perceptual metrics",
        "Production deployment requires careful optimization: model caching, efficient inference, asynchronous processing",
        "Accessibility design is crucial - not just functionality but usability for target users"
      ],
      
      technologies: ["Python", "TensorFlow", "PyTorch", "Transformers (Hugging Face)", "BLIP", "VGG16", "InceptionV3", "ViT-GPT2", "LSTM", "Streamlit", "Google TTS", "Pandas", "NumPy", "Matplotlib", "SQL"],
      
      github: "https://github.com/yourusername/image-captioning",
      demo: "Available upon request"
    },
    {
      id: 2,
      title: "AI-Driven Traffic Prediction and Management System",
      tagline: "Smart Cities • Predictive Analytics • National Recognition",
      duration: "Smart India Hackathon 2024 (24-hour sprint)",
      status: "Top 10 Finalist Nationwide (out of 1000+ teams)",
      
      overview: "Developed an intelligent traffic management system predicting disruptions and suggesting alternative routes to reduce urban congestion. Built under intense time pressure during India's largest hackathon, the solution combined real-time data integration, predictive modeling, and user-facing dashboards to address critical urban mobility challenges.",
      
      problemStatement: {
        challenge: "Urban traffic congestion costs Indian cities billions annually in lost productivity, fuel waste, and pollution. Traditional traffic systems are reactive rather than predictive, unable to forecast disruptions from accidents, weather, events, or unusual patterns.",
        goal: "Build a predictive system that forecasts traffic disruptions 30-60 minutes in advance and recommends optimal alternative routes, reducing commuter delays and overall congestion.",
        constraints: ["24-hour development timeline", "Must integrate real-time data sources", "User-friendly interface for diverse users", "Scalable architecture for city-wide deployment"]
      },
      
      technicalApproach: {
        dataIntegration: [
          "Real-time traffic APIs: Google Maps Traffic Layer providing current congestion data across city routes",
          "Weather APIs: OpenWeatherMap for temperature, precipitation, visibility affecting traffic flow",
          "Historical patterns: Scraped and processed 6 months of traffic data identifying rush hours, weekly patterns, seasonal trends",
          "Event calendars: Major events, holidays, construction affecting normal traffic patterns"
        ],
        
        predictionModel: [
          "Feature Engineering: Created time-based features (hour, day of week, month), weather impact scores, event indicators, historical congestion averages for route segments",
          "ML Approach: Ensemble model combining Random Forest (capturing non-linear patterns) and Gradient Boosting (sequential error correction)",
          "Training: 50,000+ historical data points, train/validation split, hyperparameter tuning via grid search",
          "Validation: Achieved 15% improvement in prediction accuracy compared to baseline (historical average) measured by MAE and RMSE"
        ],
        
        routeOptimization: [
          "Graph Representation: Modeled city road network as weighted graph (nodes=intersections, edges=road segments)",
          "Algorithm: Implemented Dijkstra's algorithm with dynamic edge weights updated by predicted traffic conditions",
          "Real-time Updates: Edge weights recalculated every 5 minutes based on latest predictions and actual traffic data",
          "Multiple Routes: Generated top 3 alternative routes with estimated time, distance, and congestion level"
        ],
        
        frontend: [
          "Interactive map using Google Maps JavaScript API with traffic layer overlay",
          "Real-time congestion heatmap color-coded by severity (green/yellow/red)",
          "Route comparison dashboard showing time savings, fuel efficiency, and congestion avoidance",
          "Alert system for predicted disruptions with severity levels and affected areas",
          "Responsive design supporting desktop and mobile for on-the-go access"
        ]
      },
      
      results: {
        quantitative: [
          "15% improvement in traffic disruption prediction accuracy (MAE reduction from baseline)",
          "Estimated 20% reduction in commuter delays based on simulation testing on historical data",
          "Average route suggestion provided within 3 seconds of query",
          "System tested on 100+ real traffic scenarios from past 6 months"
        ],
        achievement: "Top 10 finish nationwide out of 1000+ competing teams across India - recognized for technical innovation and practical impact"
      },
      
      impact: "Demonstrated ability to rapidly prototype complex systems under pressure. Solution addresses real urban challenge affecting millions of commuters. Showcased skills in data integration, predictive modeling, algorithm implementation, and full-stack development within 24-hour timeline.",
      
      learnings: [
        "Time-boxed development requires ruthless prioritization - focus on core features delivering maximum value",
        "Real-time systems need robust error handling - APIs can fail, data can be missing",
        "User experience matters - even technically sophisticated backend is useless with poor UI",
        "Teamwork and clear role division are critical in high-pressure environments",
        "Predictive models need continuous learning - traffic patterns evolve and need periodic retraining"
      ],
      
      technologies: ["Python", "Scikit-learn", "Random Forest", "Gradient Boosting", "Google Maps API", "OpenWeatherMap API", "Dijkstra's Algorithm", "JavaScript", "HTML", "CSS", "Flask", "SQL", "Data Visualization"],
      
      github: "https://github.com/yourusername/traffic-prediction",
      presentation: "Available on request"
    },
    {
      id: 3,
      title: "Credit Card Fraud Detection System",
      tagline: "Financial Security • Real-time ML • Production Deployment",
      duration: "Personal Project (2 months)",
      status: "Deployed on Cloud Infrastructure",
      
      overview: "Engineered a machine learning system detecting fraudulent credit card transactions in real-time. Addressed the critical challenge of imbalanced datasets (fraud is rare) while maintaining high precision to minimize false positives that frustrate legitimate customers.",
      
      problemStatement: {
        challenge: "Credit card fraud causes billions in annual losses globally. Traditional rule-based systems have high false positive rates. Machine learning offers adaptive detection but faces challenges: extreme class imbalance (fraud <1% of transactions), real-time processing requirements, and cost of false alarms.",
        goal: "Build a production-ready fraud detection system achieving 90%+ precision and recall while processing transactions in real-time (<100ms latency) suitable for deployment in payment processing pipeline.",
        constraints: ["Handle class imbalance (fraud ~0.17% of dataset)", "Minimize false positives to avoid customer friction", "Real-time inference (<100ms)", "Explainable predictions for fraud investigation"]
      },
      
      technicalApproach: {
        dataset: "Kaggle Credit Card Fraud Detection dataset: 284,807 transactions with 492 frauds (0.17% positive class). Features are PCA-transformed for privacy (V1-V28) plus amount and time.",
        
        exploratoryAnalysis: [
          "Class Distribution: Severe imbalance requiring specialized handling",
          "Feature Correlations: Analyzed correlation matrix identifying V14, V17, V12 as strong fraud indicators",
          "Amount Analysis: Fraud transactions had different distribution than legitimate (lower median amount)",
          "Temporal Patterns: Examined fraud patterns over time of day",
          "Outlier Detection: Identified extreme values requiring special handling"
        ],
        
        preprocessing: [
          "Scaling: StandardScaler for amount and time features (PCA features already normalized)",
          "Handling Imbalance: SMOTE (Synthetic Minority Over-sampling Technique) generating synthetic fraud examples to balance training set",
          "Train-Test Split: Stratified split maintaining fraud ratio; final test set on unseen time period for realistic evaluation",
          "Feature Selection: Recursive Feature Elimination identifying top 20 most predictive features"
        ],
        
        modelComparison: [
          {
            name: "Logistic Regression",
            performance: "Precision: 94%, Recall: 89%, F1: 91.4%",
            advantage: "Fast inference, interpretable coefficients, chosen for production"
          },
          {
            name: "Random Forest",
            performance: "Precision: 92%, Recall: 91%, F1: 91.5%",
            advantage: "Slightly better recall but slower inference, less interpretable"
          },
          {
            name: "XGBoost",
            performance: "Precision: 93%, Recall: 90%, F1: 91.5%",
            advantage: "Strong performance but requires more computational resources"
          }
        ],
        
        finalModel: "Selected Logistic Regression for optimal balance of accuracy, speed, and interpretability. Further tuned probability threshold (0.3 instead of 0.5) to maximize recall while maintaining precision >90%."
      },
      
      deployment: {
        architecture: [
          "Flask REST API: POST endpoint accepting transaction features, returning fraud probability and binary decision",
          "Model Serving: Serialized model loaded at startup for fast inference",
          "Input Validation: Schema validation ensuring correct feature format",
          "Logging: Transaction IDs, predictions, latency metrics for monitoring and audit",
          "Error Handling: Graceful failures with appropriate HTTP status codes"
        ],
        
        platform: "Deployed on Render cloud platform with auto-scaling and health checks",
        
        performance: [
          "Processing throughput: 100+ transactions per minute on single instance",
          "Average latency: 45ms per transaction (well under 100ms requirement)",
          "Uptime: 99.8% over 3-month monitoring period",
          "Load testing: Sustained 150 TPS without degradation"
        ]
      },
      
      results: {
        modelMetrics: [
          "94% precision - 94 out of 100 flagged transactions are actually fraud",
          "89% recall - catches 89% of actual fraud cases",
          "F1 Score: 91.4% - strong balance between precision and recall",
          "AUC-ROC: 0.96 - excellent discrimination between fraud and legitimate",
          "Confusion Matrix: Only 6% false positive rate on legitimate transactions"
        ],
        
        businessImpact: [
          "Estimated $X saved annually by preventing fraud (based on average fraud loss)",
          "Reduced false positive rate by 40% compared to baseline rule-based system",
          "Improved customer experience through fewer false declines",
          "Real-time processing enables immediate fraud intervention"
        ]
      },
      
      impact: "Demonstrated end-to-end ML pipeline from data analysis through production deployment. Addressed key real-world challenges: imbalanced data, model selection, deployment, and monitoring. System design suitable for integration into actual payment processing infrastructure.",
      
      learnings: [
        "Class imbalance requires careful handling - SMOTE, stratified splits, and metric selection (precision/recall over accuracy)",
        "Model selection involves tradeoffs - accuracy vs. latency vs. interpretability",
        "Production ML systems need more than just models - monitoring, logging, error handling are critical",
        "Threshold tuning is powerful - adjusting decision boundary can optimize for business objectives",
        "API design matters - clean interfaces, validation, and documentation enable integration"
      ],
      
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Logistic Regression", "Random Forest", "XGBoost", "SMOTE", "Flask", "REST API", "Render", "SQL", "Matplotlib", "Seaborn"],
      
      github: "https://github.com/yourusername/fraud-detection",
      demo: "https://fraud-detection-api.onrender.com"
    }
  ];

  const skills = {
    "Machine Learning & AI": {
      description: "Building intelligent systems that learn from data and make predictions",
      items: [
        { name: "Supervised Learning", proficiency: "Advanced", details: "Classification, Regression, Ensemble Methods" },
        { name: "Deep Learning", proficiency: "Advanced", details: "CNNs, RNNs, LSTMs, Transformers, Transfer Learning" },
        { name: "Computer Vision", proficiency: "Intermediate", details: "Image Classification, Object Detection, Image Captioning" },
        { name: "Natural Language Processing", proficiency: "Intermediate", details: "Text Classification, Sentiment Analysis, Language Models" },
        { name: "Model Deployment", proficiency: "Advanced", details: "Flask APIs, Streamlit, Model Optimization, Production MLOps" }
      ]
    },
    "Data Analysis & Engineering": {
      description: "Extracting insights from data and building robust data pipelines",
      items: [
        { name: "Data Analysis", proficiency: "Advanced", details: "Exploratory Data Analysis, Statistical Analysis, Visualization" },
        { name: "SQL & Databases", proficiency: "Advanced", details: "Complex Queries, Database Design, Query Optimization" },
        { name: "Data Processing", proficiency: "Advanced", details: "ETL Pipelines, Data Cleaning, Feature Engineering" },
        { name: "Business Intelligence", proficiency: "Intermediate", details: "KPI Development, Dashboard Design, Stakeholder Reporting" },
        { name: "Statistical Modeling", proficiency: "Intermediate", details: "Hypothesis Testing, Time-Series Analysis, Predictive Analytics" }
      ]
    },
    "Programming & Development": {
      description: "Writing clean, efficient, and maintainable code",
      items: [
        { name: "Python", proficiency: "Expert", details: "NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch" },
        { name: "Web Development", proficiency: "Intermediate", details: "Flask, Streamlit, REST APIs, HTML/CSS/JavaScript" },
        { name: "Version Control", proficiency: "Advanced", details: "Git, GitHub, Collaboration Workflows" },
        { name: "Cloud & DevOps", proficiency: "Intermediate", details: "AWS (Certified), Deployment, CI/CD basics" },
        { name: "Software Engineering", proficiency: "Intermediate", details: "OOP, Design Patterns, Testing, Documentation" }
      ]
    }
  };

  const education = {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    university: "Gandhi Institute of Technology and Management (GITAM)",
    location: "Visakhapatnam, India",
    period: "2022 - 2026",
    cgpa: "9.34/10",
    rank: "Top 5% of Department",
    relevantCoursework: [
      "Machine Learning & Deep Learning",
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Operating Systems",
      "Software Engineering",
      "Design & Analysis of Algorithms",
      "Computer Graphics",
      "Statistics & Probability"
    ],
    achievements: [
      "Maintained consistently high academic performance across all semesters",
      "Selected for final year capstone project ranked top 5% in department",
      "Active participation in coding competitions and technical workshops"
    ]
  };

  const certifications = [
    {
      name: "AWS Academy Machine Learning Foundations",
      issuer: "Amazon Web Services",
      date: "2025",
      description: "Comprehensive training on ML fundamentals, AWS ML services (SageMaker, etc.), and cloud-based model deployment",
      skills: ["AWS SageMaker", "Cloud ML", "Model Deployment"]
    },
    {
      name: "AI Fundamentals",
      issuer: "IBM SkillsBuild",
      date: "2025",
      description: "Foundation in AI concepts, machine learning algorithms, and practical applications",
      skills: ["AI Concepts", "ML Algorithms", "Applied AI"]
    },
    {
      name: "SQL Advanced",
      issuer: "HackerRank",
      date: "2024",
      description: "Advanced SQL querying, window functions, complex joins, and query optimization",
      skills: ["Advanced SQL", "Query Optimization", "Database Design"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center font-bold text-white shadow-md">
                TS
              </div>
              <div>
                <div className="font-bold text-lg text-gray-900">Tanmay Sai Sadineni</div>
                <div className="text-xs text-gray-500">ML Engineer & Data Analyst</div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#projects" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#skills" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#contact" className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
            Available for Full-Time Roles • June 2026
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Machine Learning Engineer<br/>
            <span className="text-blue-600">Turning Data into Impact</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl leading-relaxed">
            I build machine learning systems that solve real problems—from detecting fraud with 94% precision to 
            improving traffic predictions by 15%. With experience across defense research, government initiatives, 
            and manufacturing analytics, I specialize in turning complex data into actionable insights.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-1">9.34/10</div>
              <div className="text-sm text-gray-600">CGPA • Top 5%</div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-1">4+</div>
              <div className="text-sm text-gray-600">Technical Internships</div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-1">Top 10</div>
              <div className="text-sm text-gray-600">SIH 2024 Finalist</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md">
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm border border-gray-200">
              <FileText className="w-5 h-5" />
              View Projects
            </a>
            <a href="/resume.pdf" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm border border-gray-200">
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Professional Experience</h2>
            <p className="text-lg text-gray-600">Hands-on experience across defense, government research, manufacturing, and policy analysis</p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all border border-gray-100" data-animate>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
                      {exp.type}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-blue-600 font-medium mb-2">
                      <Building className="w-4 h-4" />
                      {exp.company}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>

                <div className="space-y-6 mb-6">
                  {exp.keyResponsibilities.map((resp, idx) => (
                    <div key={idx} className="border-l-4 border-blue-500 pl-6">
                      <h4 className="font-bold text-gray-900 mb-2">{resp.title}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed mb-2">{resp.details}</p>
                      <div className="inline-flex items-center gap-2 text-sm text-blue-600 font-medium">
                        <Target className="w-4 h-4" />
                        {resp.impact}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white text-gray-700 text-sm rounded-lg border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</div>
                  <ul className="space-y-1">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Featured Projects</h2>
            <p className="text-lg text-gray-600">In-depth technical case studies showcasing end-to-end problem solving</p>
          </div>

          <div className="space-y-16">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200" data-animate>
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
                  <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                    {project.status}
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                  <p className="text-blue-100 mb-4">{project.tagline}</p>
                  <div className="flex items-center gap-2 text-sm text-blue-100">
                    <Calendar className="w-4 h-4" />
                    {project.duration}
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Project Overview</h4>
                    <p className="text-gray-700 leading-relaxed">{project.overview}</p>
                  </div>

                  <div className="mb-8 bg-red-50 border border-red-200 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-red-600" />
                      Problem Statement
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm font-semibold text-gray-900 mb-1">Challenge:</div>
                        <p className="text-gray-700 text-sm leading-relaxed">{project.problemStatement.challenge}</p>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 mb-1">Goal:</div>
                        <p className="text-gray-700 text-sm leading-relaxed">{project.problemStatement.goal}</p>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 mb-1">Constraints:</div>
                        <ul className="space-y-1">
                          {project.problemStatement.constraints.map((constraint, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                              <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                              <span>{constraint}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Code className="w-5 h-5 text-blue-600" />
                      Technical Approach
                    </h4>
                    <div className="space-y-6">
                      {project.technicalApproach.dataset && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <div className="text-sm font-semibold text-gray-900 mb-2">Dataset:</div>
                          <p className="text-gray-700 text-sm leading-relaxed">{project.technicalApproach.dataset}</p>
                        </div>
                      )}
                      
                      {project.technicalApproach.architectures && (
                        <div>
                          <div className="text-sm font-semibold text-gray-900 mb-3">Architectures Evaluated:</div>
                          <div className="grid md:grid-cols-2 gap-4">
                            {project.technicalApproach.architectures.map((arch, idx) => (
                              <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                <div className="font-semibold text-gray-900 mb-1">{arch.name}</div>
                                <p className="text-xs text-gray-600 mb-2">{arch.description}</p>
                                <div className="text-sm text-blue-600 font-medium mb-1">{arch.performance}</div>
                                <p className="text-xs text-gray-700">{arch.insights}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {project.technicalApproach.implementation && (
                        <div>
                          <div className="text-sm font-semibold text-gray-900 mb-3">Implementation Details:</div>
                          <ul className="space-y-2">
                            {project.technicalApproach.implementation.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                <Zap className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Project 2 specific technical approach fields */}
                      {project.technicalApproach.dataIntegration && (
                        <div>
                          <div className="text-sm font-semibold text-gray-900 mb-2">Data Integration:</div>
                          <ul className="space-y-2">
                            {project.technicalApproach.dataIntegration.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                <Zap className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {project.technicalApproach.predictionModel && (
                        <div>
                          <div className="text-sm font-semibold text-gray-900 mb-2">Prediction Modeling:</div>
                          <ul className="space-y-2">
                            {project.technicalApproach.predictionModel.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                <Zap className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {project.technicalApproach.routeOptimization && (
                        <div>
                          <div className="text-sm font-semibold text-gray-900 mb-2">Route Optimization:</div>
                          <ul className="space-y-2">
                            {project.technicalApproach.routeOptimization.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                <Zap className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {project.technicalApproach.frontend && (
                        <div>
                          <div className="text-sm font-semibold text-gray-900 mb-2">Frontend Interface:</div>
                          <ul className="space-y-2">
                            {project.technicalApproach.frontend.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                <Zap className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Project 3 specific technical approach fields */}
                      {project.technicalApproach.exploratoryAnalysis && (
                        <div>
                          <div className="text-sm font-semibold text-gray-900 mb-2">Exploratory Analysis:</div>
                          <ul className="space-y-2">
                            {project.technicalApproach.exploratoryAnalysis.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                <Zap className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {project.technicalApproach.preprocessing && (
                        <div>
                          <div className="text-sm font-semibold text-gray-900 mb-2">Data Preprocessing:</div>
                          <ul className="space-y-2">
                            {project.technicalApproach.preprocessing.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                <Zap className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {project.technicalApproach.modelComparison && (
                        <div>
                          <div className="text-sm font-semibold text-gray-900 mb-3">Models Evaluated:</div>
                          <div className="grid md:grid-cols-3 gap-4">
                            {project.technicalApproach.modelComparison.map((model, idx) => (
                              <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                <div className="font-semibold text-gray-900 mb-1">{model.name}</div>
                                <div className="text-sm text-blue-600 font-medium mb-1">{model.performance}</div>
                                <p className="text-xs text-gray-700"><span className="font-semibold">Advantage:</span> {model.advantage}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {project.technicalApproach.finalModel && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <div className="text-sm font-semibold text-gray-900 mb-2">Final Model Selection:</div>
                          <p className="text-gray-700 text-sm leading-relaxed">{project.technicalApproach.finalModel}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {project.deployment && (
                    <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Rocket className="w-5 h-5 text-green-600" />
                        Deployment & Production
                      </h4>
                      <div className="space-y-3">
                        {project.deployment.platform && (
                          <div>
                            <div className="text-sm font-semibold text-gray-900 mb-1">Platform:</div>
                            <p className="text-gray-700 text-sm">{project.deployment.platform}</p>
                          </div>
                        )}
                        {project.deployment.features && (
                          <div>
                            <div className="text-sm font-semibold text-gray-900 mb-2">Features:</div>
                            <ul className="space-y-1">
                              {project.deployment.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {project.deployment.architecture && (
                          <div>
                            <div className="text-sm font-semibold text-gray-900 mb-2">Architecture:</div>
                            <ul className="space-y-1">
                              {project.deployment.architecture.map((arch, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                  <span>{arch}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {project.deployment.performance && (
                          <div>
                            <div className="text-sm font-semibold text-gray-900 mb-1">Performance:</div>
                            {Array.isArray(project.deployment.performance) ? (
                              <ul className="space-y-1">
                                {project.deployment.performance.map((perf, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span>{perf}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-gray-700 text-sm">{project.deployment.performance}</p>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Results & Impact</h4>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      {project.results.quantitative && (
                        <div>
                          <div className="text-sm font-semibold text-gray-900 mb-2">Quantitative Results:</div>
                          <ul className="space-y-2">
                            {project.results.quantitative.map((result, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                <TrendingUp className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.results.modelMetrics && (
                        <div>
                          <div className="text-sm font-semibold text-gray-900 mb-2">Model Metrics:</div>
                          <ul className="space-y-2">
                            {project.results.modelMetrics.map((result, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                <TrendingUp className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.results.qualitative && (
                        <div>
                          <div className="text-sm font-semibold text-gray-900 mb-2">Qualitative Insights:</div>
                          <ul className="space-y-2">
                            {project.results.qualitative.map((result, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.results.businessImpact && (
                        <div>
                          <div className="text-sm font-semibold text-gray-900 mb-2">Business Impact:</div>
                          <ul className="space-y-2">
                            {project.results.businessImpact.map((result, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.results.achievement && (
                        <div className="col-span-2 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                          <div className="text-sm font-semibold text-gray-900 mb-1">Recognition / Achievement:</div>
                          <p className="text-gray-700 text-sm leading-relaxed">{project.results.achievement}</p>
                        </div>
                      )}
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                      <div className="text-sm font-semibold text-gray-900 mb-1">Overall Impact:</div>
                      <p className="text-gray-700 text-sm leading-relaxed">{project.impact}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Key Learnings</h4>
                    <ul className="space-y-2">
                      {project.learnings.map((learning, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <Brain className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                          <span>{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.github && (
                      <a href={project.github} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.presentation && (
                      <a href={project.presentation === "Available on request" ? "#contact" : project.presentation} className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        View Presentation
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Technical Expertise</h2>
            <p className="text-lg text-gray-600">Comprehensive skill set across ML, data analysis, and software engineering</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {Object.entries(skills).map(([category, data], index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200" data-animate>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category}</h3>
                <p className="text-sm text-gray-600 mb-6">{data.description}</p>
                <div className="space-y-4">
                  {data.items.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-semibold text-gray-900">{skill.name}</span>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                          skill.proficiency === 'Expert' ? 'bg-green-100 text-green-700' :
                          skill.proficiency === 'Advanced' ? 'bg-blue-100 text-blue-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {skill.proficiency}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">{skill.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-600 rounded-lg text-white">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Education</h3>
                <div className="text-lg font-semibold text-blue-600 mb-1">{education.degree}</div>
                <div className="text-gray-700 font-medium mb-1">{education.university} • {education.location}</div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                  <span>{education.period}</span>
                  <span className="font-bold text-blue-600">CGPA: {education.cgpa} ({education.rank})</span>
                </div>
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-900 mb-2">Relevant Coursework:</div>
                  <div className="flex flex-wrap gap-2">
                    {education.relevantCoursework.map((course, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white text-gray-700 text-xs rounded border border-gray-200">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Certifications & Achievements</h2>
            <p className="text-lg text-gray-600">Professional credentials and recognitions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-2 text-blue-600 mb-3">
                  <Award className="w-5 h-5" />
                  <span className="text-xs font-semibold text-gray-500">{cert.date}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{cert.issuer}</p>
                <p className="text-xs text-gray-700 mb-3 leading-relaxed">{cert.description}</p>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-orange-200">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-6 h-6 text-orange-600" />
                <h3 className="font-bold text-gray-900">Smart India Hackathon 2024</h3>
              </div>
              <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">Top 10 Finalist Nationwide</span> out of 1000+ teams</p>
              <p className="text-xs text-gray-600">Built AI-driven traffic prediction system in 24-hour sprint demonstrating rapid prototyping and team collaboration</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-indigo-200">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-indigo-600" />
                <h3 className="font-bold text-gray-900">National Cadet Corps (NCC)</h3>
              </div>
              <p className="text-sm text-gray-700 mb-2"><span className="font-semibold">'A' & 'B' Certificates</span></p>
              <p className="text-xs text-gray-600">Completed rigorous training developing discipline, leadership, and civic responsibility through structured military programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Build Something Together</h2>
          <p className="text-lg text-gray-600 mb-8">
            Currently seeking <span className="font-semibold text-blue-600">Machine Learning Engineer, AI Research Engineer, or Data Scientist</span> roles starting June 2026. 
            Also open to freelance AI/ML consulting projects.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:tanmaysadineni@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md">
              <Mail className="w-5 h-5" />
              tanmaysadineni@gmail.com
            </a>
            <a href="https://linkedin.com/in/tanmay-sai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors shadow-md">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors shadow-md">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What I Can Bring to Your Team</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Technical Excellence</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Strong foundation in ML algorithms and deep learning architectures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Production deployment experience (APIs, cloud platforms)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Data analysis and visualization for business insights</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Proven Impact</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Consistent 5-15% accuracy improvements across projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Experience in defense, government, and manufacturing sectors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Strong academic record (Top 5%) demonstrating work ethic</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-2">© 2026 Tanmay Sai Sadineni. Built with React & Tailwind CSS.</p>
          <p className="text-sm text-gray-500">Available for opportunities starting June 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;