import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

const languageIcons: Record<string, any> = {
  JavaScript: require("../assets/icons/javascript.png"),
  TypeScript: require("../assets/icons/typescript.png"),
  Python: require("../assets/icons/python.png"),
  Java: require("../assets/icons/java.png"),
  CSharp: require("../assets/icons/csharp.png"),
  PHP: require("../assets/icons/php.png"),
  Ruby: require("../assets/icons/ruby.png"),
  HTML: require("../assets/icons/html.png"),
  CSS: require("../assets/icons/css.png"),
  SQL: require("../assets/icons/sql.png"),
  // Add more as needed
};

const mostCommonlyUsed = [
  {
    name: "MERN Stack",
    short: "A popular JavaScript stack for building modern web apps.",
    languages: ["JavaScript"],
    details:
      "MERN stands for MongoDB, Express.js, React, and Node.js. It is used for building full-stack web applications using JavaScript for both client and server sides.",
  },
  {
    name: "MEAN Stack",
    short: "A full JavaScript stack with Angular for frontend.",
    languages: ["JavaScript"],
    details:
      "MEAN stands for MongoDB, Express.js, Angular, and Node.js. It is ideal for building scalable and maintainable web applications with a single language across the stack.",
  },
  {
    name: "LAMP Stack",
    short: "A classic open-source stack for dynamic websites.",
    languages: ["PHP", "SQL"],
    details:
      "LAMP stands for Linux, Apache, MySQL, and PHP (or Python/Perl). It is widely used for building dynamic websites and web applications.",
  },
  {
    name: ".NET Stack",
    short: "A Microsoft-supported stack for scalable apps.",
    languages: ["CSharp", "F#", "Visual Basic"],
    details:
      ".NET is a developer platform for building desktop, web, and mobile apps. It supports multiple languages and is known for its performance and security.",
  },
  {
    name: "Python-Django Stack",
    short: "A high-level Python framework for rapid web development.",
    languages: ["Python"],
    details:
      "Django is a Python web framework that encourages rapid development and clean, pragmatic design. It is used for building secure and scalable web applications.",
  },
];

const allTechStacks = [
  ...mostCommonlyUsed,
  {
    name: "Ruby on Rails",
    short: "A productive MVC framework for web apps in Ruby.",
    languages: ["Ruby", "HTML", "CSS", "JavaScript"],
    details:
      "Ruby on Rails (RoR) is an open-source web framework that follows the model–view–controller (MVC) pattern. It is known for its convention over configuration and rapid development.",
  },
  {
    name: "Flutter Stack",
    short: "A cross-platform mobile stack powered by Dart.",
    languages: ["Dart"],
    details:
      "Flutter is a UI toolkit from Google for building natively compiled applications for mobile, web, and desktop from a single codebase using the Dart language.",
  },
  {
    name: "React Native Stack",
    short: "A JavaScript framework for native mobile apps.",
    languages: ["JavaScript"],
    details:
      "React Native lets you build mobile apps using JavaScript and React. It enables code reuse across iOS and Android platforms.",
  },
  {
    name: "Java EE Stack",
    short: "A robust stack for enterprise Java applications.",
    languages: ["Java"],
    details:
      "Java Enterprise Edition (Java EE) provides a set of specifications for enterprise features such as distributed computing and web services, widely used in large-scale systems.",
  },
  {
    name: "Serverless Stack",
    short: "A modern stack using cloud functions for scalability.",
    languages: ["JavaScript", "Python", "Java", "Go"],
    details:
      "Serverless stacks use cloud providers (AWS Lambda, Google Cloud Functions, Azure Functions) to run backend code without managing servers, allowing for scalable and cost-effective apps.",
  },
];

function LanguageIcons({ languages }: { languages: string[] }) {
  return (
    <View style={{ flexDirection: 'row', marginTop: 4 }}>
      {languages.map((lang) =>
        languageIcons[lang] ? (
          <Image
            key={lang}
            source={languageIcons[lang]}
            style={{ width: 24, height: 24, marginRight: 6 }}
            resizeMode="contain"
          />
        ) : (
          <Text key={lang} style={{ marginRight: 6 }}>{lang}</Text>
        )
      )}
    </View>
  );
}

function StackSection({ title, stacks }: { title: string; stacks: typeof mostCommonlyUsed }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const router = useRouter();
  return (
    <View style={{ marginBottom: 32 }}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {stacks.map((stack, idx) => (
        <View key={stack.name} style={[styles.stackItem, styles.boxShadow]}>
          <TouchableOpacity onPress={() => setOpenIndex(openIndex === idx ? null : idx)}>
            <Text style={styles.stackName}>{stack.name}</Text>
            {openIndex !== idx && (
              <>
                <Text style={styles.stackShort}>{stack.short}</Text>
                <LanguageIcons languages={stack.languages} />
              </>
            )}
          </TouchableOpacity>
          {openIndex === idx && (
            <>
              <Text style={styles.stackDetails}>{stack.details}</Text>
              <TouchableOpacity
                style={styles.roadmapButton}
                onPress={() => stack.name === "MERN Stack" ? router.push("./Mern") : undefined}
              >
                <Text style={styles.roadmapButtonText}>Roadmap</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      ))}
    </View>
  );
}

export default function TechStacks() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Tech Stacks</Text>
      <StackSection title="Most Commonly Used" stacks={mostCommonlyUsed} />
      <StackSection title="All Tech Stacks" stacks={allTechStacks} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#222',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  stackItem: {
    marginBottom: 18,
    borderRadius: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    padding: 18,
  },
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  stackName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  stackShort: {
    fontSize: 15,
    color: '#555',
    marginTop: 2,
  },
  stackDetails: {
    marginTop: 8,
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
  },
  roadmapButton: {
    marginTop: 14,
    backgroundColor: '#222',
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 24,
    alignSelf: 'flex-start',
  },
  roadmapButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
}); 