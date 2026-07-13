export type Vision = {
  num: string;
  dir: "ltr" | "rtl";
  img: string;
  en: string;
  title: string;
  title2?: string;
  body: string;
};

export const visions: Vision[] = [
  {
    num: "01",
    dir: "ltr",
    img: "/assets/vision-01.png",
    en: "ZERO OPPORTUNITY LOSS FOR TALENT",
    title: "才能の機会損失をゼロにする",
    body: "生まれた場所や環境によって、挑戦する前に消えていく才能があります。ENTHUSIASTSは、埋もれた才能が発見され、信じられ、磨かれ、社会と接続されるまでの構造をつくることで、「気づかれないまま終わる可能性」を世界からなくすことを目指します。",
  },
  {
    num: "02",
    dir: "rtl",
    img: "/assets/vision-02.png",
    en: "REDEFINING TALENT AND OPPORTUNITY",
    title: "才能と機会のあり方を再定義する",
    body: "AIがあらゆる作業を加速する時代に、人間にしか担えない価値とは何か。私たちはAIを人間の対立物ではなく増幅装置と捉え、機械が効率を、人間が物語を担う協働のかたちを設計します。テクノロジーと共に、才能がより遠くまで届く仕組みを再定義します。",
  },
  {
    num: "03",
    dir: "ltr",
    img: "/assets/vision-03.png",
    en: "FROM “YOU CAN’T” TO “ONLY YOU CAN”",
    title: "「お前じゃ無理」を",
    title2: "「お前じゃなきゃ無理」に変える",
    body: "挑戦する前から否定される人の背景には、その人にしかない原体験と願いがあります。人生の奥にある物語を掘り起こし、社会に届く言葉に変換し、ブランドとして設計し、仲間を集める。その先で「あなたじゃなきゃ無理だった」と言われる転換を生み出します。",
  },
];

export type Project = {
  num: string;
  name: string;
  jp: string;
  logo: string;
  label: string;
  concept: string;
  body: string[];
};

export const projects: Project[] = [
  {
    num: "01",
    name: "rita",
    jp: "リタ／ウェルネス",
    logo: "/assets/proj-rita.png",
    label: "WELLNESS × ALTRUISM",
    concept: "利他の想いを世界に",
    body: [
      "ritaとは、一人ひとりの内側にある「利他の想い」を、心身の健やかさと、社会をよりよくする行動へつなげるプロジェクトです。",
      "三度の白血病を経験した代表の、「生かされた命を、誰かのために燃やしたい」という願いから始まりました。",
      "ウェルネスを軸に、学び・体験・コミュニティを通して、日本に根づく利他の精神を世界へ届け、利他が溢れ続ける未来をつくります。",
    ],
  },
  {
    num: "02",
    name: "ROUGH",
    jp: "ラフ／ランニング",
    logo: "/assets/proj-rough.jpg",
    label: "RUNNING × SELF-LOVE",
    concept: "Run Your Life",
    body: [
      "ROUGHとは、走ることを通して、自分を愛し、自分の人生を自分の足で進む力を育むプロジェクトです。",
      "速さや記録だけを競うのではなく、ランニングを共通言語に、自分のリズムを取り戻し、互いの違いを認め合えるつながりを生み出します。",
      "誰もが自分らしいペースで、自分の人生を走れる社会を目指しています。",
    ],
  },
  {
    num: "03",
    name: "Impülse",
    jp: "インパルス／ミュージック",
    logo: "/assets/proj-impulse.png",
    label: "MUSIC × IMPULSE",
    concept: "Make Your Rock",
    body: [
      "Impülseとは、一人ひとりの内側にある「衝動」を形にし、社会に響く表現へと昇華させるプロジェクトです。",
      "私たちが目指す表現に、決められた正解はありません。譲れない信念や行き場のない衝動を手放さず、自分だけの形で鳴らし続けることを大切にします。",
      "音楽を軸に、才能が埋もれないシーンと、クリエイティブに生きる若者がつながり、衝動を持ち続けられる環境をつくります。",
    ],
  },
];

export type Member = {
  nameJp: string;
  nameEn: string;
  role: string;
  bio: string;
  img: string;
};

export const members: Member[] = [
  {
    nameJp: "佐々木 慧",
    nameEn: "SATOSHI SASAKI",
    role: "ENTHUSIASTS FOUNDER / PRODUCER",
    bio: "幼少期は父の影響でプロレーサーを志すも、その道を断念。大学と専門学校でIT・経営を学んだ後、新卒で独立。「原石に光を」を理念に、才能の機会損失をゼロにするため、人材育成・コミュニティプロデュースを手がける。",
    img: "/assets/mem-20.png",
  },
  {
    nameJp: "布野 雅也",
    nameEn: "MASAYA FUNO",
    role: "ROUGH FOUNDER",
    bio: "中学・高校ともに全国駅伝大会へ出場し、帝京大学駅伝部へ進学。前十字靭帯断裂により箱根駅伝への道を断念した後、TWOLAPSにてMDCのコアメンバーとして活動。現在はランニングコミュニティ「ROUGH」を立ち上げ、誰もが自分の人生を自分の足で走れる社会の実現を目指す。",
    img: "/assets/mem-23.png",
  },
  {
    nameJp: "奥野 七夢",
    nameEn: "NATSUMU OKUNO",
    role: "rita FOUNDER / CANCER SURVIVOR",
    bio: "龍谷大学付属平安高等学校に野球推薦で進学し、甲子園100回記念大会に出場。15歳で白血病を発症し、16歳・19歳で再発を経験。3度の白血病を乗り越えた経験を原点に、骨髄バンクユースアンバサダー・京都大学小児がんピアサポーターとしても活動。現在はプロジェクト「rita」を立ち上げ、「利他が溢れ続ける世界」の実現を目指す。",
    img: "/assets/mem-22.png",
  },
  {
    nameJp: "當内 脩平",
    nameEn: "SHUHEI TOUCHI",
    role: "Impülse FOUNDER / ARTIST",
    bio: "300人規模の音楽フェスイベント「STAR'Z DASH!!」を主宰。音楽を軸に、アーティスト・企業・学生が交差する熱狂の場をつくる。「Make Your Rock」を掲げ、若者の衝動が社会に消される前に、世界へ鳴らす表現へと変えている。",
    img: "/assets/mem-21.png",
  },
];

export type PrivacySection = {
  num: string;
  title: string;
  paras: string[];
};

export const privacySections: PrivacySection[] = [
  {
    num: "01",
    title: "個人情報の定義",
    paras: [
      "本ポリシーにおいて「個人情報」とは、個人情報の保護に関する法律に定める個人情報、すなわち生存する個人に関する情報であって、氏名、メールアドレス等により特定の個人を識別できるもの（他の情報と容易に照合でき、それにより特定の個人を識別できるものを含みます）を指します。",
    ],
  },
  {
    num: "02",
    title: "個人情報の取得",
    paras: [
      "当団体は、お問い合わせフォームの送信、その他適法かつ公正な手段によって、利用目的の達成に必要な範囲で個人情報を取得します。",
      "お問い合わせの際には、お名前・メールアドレス・会社名または所属・お問い合わせ内容などをご入力いただく場合があります。",
    ],
  },
  {
    num: "03",
    title: "利用目的",
    paras: [
      "取得した個人情報は、以下の目的の範囲内で利用します。",
      "・お問い合わせへの回答およびご連絡のため／・プロジェクトへの参加、協業、取材等のご相談に関する対応のため／・当団体の活動に関するご案内のため／・上記に付随する業務の遂行のため。",
    ],
  },
  {
    num: "04",
    title: "第三者への提供",
    paras: [
      "当団体は、法令に定める場合を除き、あらかじめご本人の同意を得ることなく、取得した個人情報を第三者に提供しません。",
      "ただし、人の生命・身体または財産の保護のために必要があり、ご本人の同意を得ることが困難である場合等、法令で認められる場合はこの限りではありません。",
    ],
  },
  {
    num: "05",
    title: "安全管理措置",
    paras: [
      "当団体は、取り扱う個人情報の漏えい、滅失またはき損の防止その他の安全管理のために、必要かつ適切な措置を講じます。",
    ],
  },
  {
    num: "06",
    title: "開示・訂正・利用停止等",
    paras: [
      "ご本人から、ご自身の個人情報について開示、訂正、追加、削除、利用停止または消去のご請求があった場合、当団体は法令に基づき、ご本人であることを確認のうえ、合理的な期間内に対応します。",
      "ご請求は、末尾のお問い合わせ窓口までご連絡ください。",
    ],
  },
  {
    num: "07",
    title: "Cookie等の利用",
    paras: [
      "本サイトでは、利用状況の把握やサービス向上のため、Cookieや類似技術を利用する場合があります。これらは個人を直接特定するものではなく、ブラウザの設定により無効化することが可能です。",
    ],
  },
  {
    num: "08",
    title: "本ポリシーの改定",
    paras: [
      "当団体は、法令の改正や運用の変更等に応じて、本ポリシーを予告なく変更することがあります。変更後の内容は、本ページに掲載した時点から効力を生じるものとします。",
    ],
  },
];
