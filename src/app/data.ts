import { faker } from "@faker-js/faker";
import { StaticImageData } from "next/image";
import mantineLogo from "../../public/mantine.webp";
import makemdLogo from "../../public/makemd.webp";
import researchLogo from "../../public/research.webp";

faker.seed(123);

type Data = {
  id: number;
  img: StaticImageData;
  label: string;
  categories: Category[];
};

type Category = {
  id: number;
  label: string;
  channels: Channel[];
};

type Channel = {
  id: number;
  label: string;
  icon?: string;
  description?: string;
  messages: Message[];
  unread?: boolean;
};

export type Message = {
  id: number;
  user: string;
  avatarUrl: string;
  date: string;
  text: string;
};

export const data: Data[] = [
  {
    id: 1,
    label: "Mantine",
    img: mantineLogo,
    categories: [
      {
        id: 1,
        label: "",
        channels: [
          {
            id: 1,
            label: "welcome",
            description: "Introduction to the Mantine and community.",
            icon: "Book",
            messages: getMessages(),
          },
          {
            id: 2,
            label: "announcements",
            icon: "Speakerphone",
            messages: getMessages(),
          },
        ],
      },
      {
        id: 2,
        label: "Releases",
        channels: [
          {
            id: 3,
            label: "releases",
            description: "Minor and major releases announcements",
            unread: false,
            messages: getMessages(),
          },
          {
            id: 4,
            label: "patches",
            description: "Patch releases",
            unread: true,
            messages: getMessages(),
          },
          {
            id: 5,
            label: "alpha releases",
            description: "Discuss beta releases",
            unread: true,
            messages: getMessages(),
          },
        ],
      },
      {
        id: 3,
        label: "Support",
        channels: [
          {
            id: 6,
            label: "faq",
            description: "Frequently asked questions",
            messages: getMessages(),
          },
          {
            id: 7,
            label: "support",
            description: "",
            messages: getMessages(),
          },
        ],
      },
      {
        id: 4,
        label: "Contributing",
        channels: [
          {
            id: 8,
            label: "contributing",
            description: "Ask anything related to contributing to Mantine",
            messages: getMessages(),
            unread: true,
          },
          {
            id: 9,
            label: "open-issues",
            description: "",
            messages: getMessages(),
          },
        ],
      },
      {
        id: 5,
        label: "Ideas",
        channels: [
          {
            id: 10,
            label: "feedback",
            description: "Leave feedback",
            messages: getMessages(),
          },
          {
            id: 11,
            label: "insights",
            description: "Insights and ideas",
            unread: true,
            messages: getMessages(),
          },
        ],
      },
      {
        id: 6,
        label: "Community",
        channels: [
          {
            id: 12,
            label: "showcase",
            description: "Show what you've build with Mantine",
            messages: getMessages(),
          },
          {
            id: 13,
            label: "memes",
            description: "",
            unread: true,
            messages: getMessages(),
          },
          {
            id: 14,
            label: "off-topic",
            description: "Discuss anything not related to Mantine",
            messages: getMessages(),
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "make.md",
    img: makemdLogo,
    categories: [
      {
        id: 7,
        label: "",
        channels: [
          {
            id: 15,
            label: "welcome",
            icon: "Book",
            messages: getMessages(),
          },
          {
            id: 16,
            label: "announcements",
            icon: "Speakerphone",
            description:
              "Announcements related to this Discord server and Next.js",
            messages: getMessages(),
          },
        ],
      },
      {
        id: 8,
        label: "Community",
        channels: [
          {
            id: 17,
            label: "general",
            description: "",
            messages: getMessages(),
          },
          {
            id: 18,
            label: "guides",
            description: "",
            messages: getMessages(),
            unread: true,
          },
          {
            id: 19,
            label: "spaces",
            description:
              "Show off your maker space with the community and find inspiration from other makers.",
            messages: getMessages(),
          },
          {
            id: 20,
            label: "covers",
            description: "",
            messages: getMessages(),
            unread: true,
          },
        ],
      },
      {
        id: 9,
        label: "MAKE.MD FOR OBSIDIAN",
        channels: [
          {
            id: 21,
            label: "releases",
            icon: "HashtagWithSpeechBubble",
            description: "Get the latest release of MAKE.md here",
            messages: getMessages(),
          },
          {
            id: 22,
            label: "questions",
            unread: true,
            description: "",
            messages: getMessages(),
          },
          {
            id: 23,
            label: "bugs",
            unread: true,
            messages: getMessages(),
          },
          {
            id: 24,
            label: "basics-plugin",
            description: "",
            messages: getMessages(),
          },
          {
            id: 25,
            label: "customization",
            unread: true,
            description: "",
            messages: getMessages(),
          },
        ],
      },
      {
        id: 10,
        label: "Languages",
        channels: [
          {
            id: 26,
            label: "français",
            icon: "HashtagWithSpeechBubble",
            description: "",
            messages: getMessages(),
          },
          {
            id: 27,
            label: "中文",
            unread: true,
            description: "",
            messages: getMessages(),
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Research",
    img: researchLogo,
    categories: [
      {
        id: 11,
        label: "Text Channels",
        channels: [
          { id: 28, label: "general", messages: getMessages() },
          { id: 29, label: "ok", unread: true, messages: getMessages() },
          {
            id: 30,
            label: "others",
            unread: true,
            messages: getMessages(),
          },
        ],
      },
    ],
  },
];

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function getMessages() {
  return [...Array(getRandomInt(15, 25))]
    .map(() => {
      const user = faker.internet.username();
      const avatarUrl = faker.image.avatar();

      return [...Array(getRandomInt(1, 4))].map(() => ({
        id: faker.number.int(),
        user,
        avatarUrl,
        date: "1/12/2025",
        text: faker.lorem.sentences(3),
      }));
    })
    .flat();
}
