import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { useState } from "react";

const faqs = [
  {
    question: "What is a tech stack?",
    answer:
      "A tech stack is a combination of technologies, frameworks, and tools used to build and run an application. It typically includes a frontend (user interface), backend (server logic), and a database.",
  },
  {
    question: "What are the most popular tech stacks?",
    answer:
      "Some of the most popular tech stacks include MERN (MongoDB, Express.js, React, Node.js), MEAN (MongoDB, Express.js, Angular, Node.js), LAMP (Linux, Apache, MySQL, PHP/Python/Perl), and others like Ruby on Rails and Serverless stacks.",
  },
  {
    question: "What is the MERN stack?",
    answer:
      "MERN stands for MongoDB, Express.js, React, and Node.js. It's a popular JavaScript-based stack for building modern web applications, especially single-page apps.",
  },
  {
    question: "What is the MEAN stack?",
    answer:
      "MEAN stands for MongoDB, Express.js, Angular, and Node.js. Like MERN, it's a full JavaScript stack but uses Angular for the frontend instead of React.",
  },
  {
    question: "What is the LAMP stack?",
    answer:
      "LAMP stands for Linux, Apache, MySQL, and PHP (or Python/Perl). It's a classic open-source stack for building dynamic websites and web apps.",
  },
  {
    question: "How do I choose the right tech stack?",
    answer:
      "Consider your project requirements, team expertise, scalability needs, performance, and community support. There is no one-size-fits-all; the best stack depends on your specific goals.",
  },
  {
    question: "What is the Tech Stack Roadmap app?",
    answer:
      "The Tech Stack Roadmap app is a tool designed to help you learn about different technology stacks, their components, and how to plan your learning journey in tech development.",
  },
  {
    question: "Can I use this app to learn about specific stacks like MERN or LAMP?",
    answer:
      "Yes! The app provides information and guidance on popular stacks like MERN, MEAN, LAMP, and more, helping you understand their pros, cons, and use cases.",
  },
  {
    question: "Why is it important to understand tech stacks?",
    answer:
      "Understanding tech stacks helps you make informed decisions when building or joining projects, improves your ability to collaborate with teams, and guides your learning path as a developer.",
  },
  {
    question: "How can I contact support or suggest new features?",
    answer:
      "You can use the 'Contact Support' option in the app's help menu to reach out with questions or suggestions.",
  },
  {
    question: "How can I support the development of this app?",
    answer:
      "You can support the app by sharing it with others, providing feedback, or using the 'Donate' option in the help menu.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Frequently Asked Questions</Text>
      {faqs.map((faq, idx) => (
        <View key={idx} style={styles.faqItem}>
          <TouchableOpacity onPress={() => setOpenIndex(openIndex === idx ? null : idx)}>
            <Text style={styles.question}>{faq.question}</Text>
          </TouchableOpacity>
          {openIndex === idx && <Text style={styles.answer}>{faq.answer}</Text>}
        </View>
      ))}
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
  faqItem: {
    marginBottom: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 12,
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  answer: {
    marginTop: 8,
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
  },
}); 