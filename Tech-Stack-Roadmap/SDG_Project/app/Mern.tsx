import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Linking, Dimensions, Modal } from "react-native";

const mindMapNodes = [
  {
    key: "overview",
    label: "MERN Overview",
    info: `MERN stands for MongoDB, Express.js, React, and Node.js. It's a popular JavaScript stack for building modern web applications, allowing you to use JavaScript for both client and server sides.`,
    links: [
      { label: "W3Schools: MERN Stack", url: "https://www.w3schools.com/whatis/whatis_mern.asp" },
      { label: "YouTube: MERN Stack Crash Course", url: "https://www.youtube.com/watch?v=7CqJlxBYj-M" },
    ],
  },
  {
    key: "mongodb",
    label: "MongoDB",
    info: `MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. Learn about collections, documents, CRUD operations, indexing, aggregation, and data modeling. Tools: MongoDB Compass, Mongoose (ODM).`,
    links: [
      { label: "W3Schools: MongoDB", url: "https://www.w3schools.com/mongodb/" },
      { label: "YouTube: MongoDB Tutorial for Beginners", url: "https://www.youtube.com/watch?v=ofme2o29ngU" },
    ],
  },
  {
    key: "express",
    label: "Express.js",
    info: `Express.js is a minimal and flexible Node.js web application framework. Learn about routing, middleware, REST APIs, error handling, authentication, and security best practices. Tools: Postman, JWT, Helmet.`,
    links: [
      { label: "W3Schools: Express.js", url: "https://www.w3schools.com/express/" },
      { label: "YouTube: Express.js Crash Course", url: "https://www.youtube.com/watch?v=L72fhGm1tfE" },
    ],
  },
  {
    key: "react",
    label: "React",
    info: `React is a JavaScript library for building user interfaces. Learn about components, hooks, state management, props, JSX, lifecycle, and routing (React Router). Tools: Redux, React DevTools, Styled Components.`,
    links: [
      { label: "W3Schools: React", url: "https://www.w3schools.com/react/" },
      { label: "YouTube: React JS Crash Course", url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8" },
    ],
  },
  {
    key: "nodejs",
    label: "Node.js",
    info: `Node.js is a JavaScript runtime for server-side development. Learn about npm, asynchronous programming, event loop, file system, environment variables, and deploying Node apps. Tools: nodemon, dotenv, PM2.`,
    links: [
      { label: "W3Schools: Node.js", url: "https://www.w3schools.com/nodejs/" },
      { label: "YouTube: Node.js Crash Course", url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4" },
    ],
  },
];

export default function Mern() {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedNode = mindMapNodes.find((n) => n.key === selected);

  // Mind map node positions
  const centerX = 160, centerY = 60;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MERN Stack Mind Map</Text>
      <View style={styles.mindMapArea}>
        {/* Central Node */}
        <TouchableOpacity
          style={[styles.node, styles.centralNode, { position: 'absolute', left: centerX - 55, top: centerY - 30, zIndex: 1 }]}
          onPress={() => setSelected("overview")}
        >
          <Text style={styles.nodeText}>MERN</Text>
        </TouchableOpacity>
        {/* Child Nodes */}
        <TouchableOpacity style={[styles.node, { position: 'absolute', left: 60, top: 160, zIndex: 1 }]} onPress={() => setSelected("mongodb")}> 
          <Text style={styles.nodeText}>MongoDB</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.node, { position: 'absolute', left: 260, top: 160, zIndex: 1 }]} onPress={() => setSelected("express")}> 
          <Text style={styles.nodeText}>Express.js</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.node, { position: 'absolute', left: 60, top: 260, zIndex: 1 }]} onPress={() => setSelected("react")}> 
          <Text style={styles.nodeText}>React</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.node, { position: 'absolute', left: 260, top: 260, zIndex: 1 }]} onPress={() => setSelected("nodejs")}> 
          <Text style={styles.nodeText}>Node.js</Text>
        </TouchableOpacity>
        <View style={{ height: 340 }} />
      </View>
      {/* Default Modal for Info */}
      <Modal
        visible={!!selected}
        transparent={false}
        animationType="slide"
        onRequestClose={() => setSelected(null)}
      >
        <View style={styles.fullPageModal}>
          <View style={styles.dragHandleContainer}>
            <View style={styles.dragHandle} />
          </View>
          <Text style={styles.sidebarTitle}>{selectedNode?.label}</Text>
          <Text style={styles.sidebarText}>{selectedNode?.info}</Text>
          {selectedNode?.links && selectedNode.links.map((link, idx) => (
            <TouchableOpacity key={idx} onPress={() => Linking.openURL(link.url)} style={styles.linkButton}>
              <Text style={styles.linkText}>{link.label}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={() => setSelected(null)} style={{marginTop: 24, alignSelf: 'center'}}>
            <Text style={{color: '#1a73e8', fontWeight: 'bold', fontSize: 16}}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    paddingTop: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginBottom: 18,
  },
  mindMapArea: {
    width: 400,
    height: 370,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 10,
  },
  centralNode: {
    backgroundColor: '#ffe066',
    borderColor: '#ffd700',
    borderWidth: 2,
    width: 110,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  node: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 18,
    paddingVertical: 14,
    paddingHorizontal: 22,
    minWidth: 90,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  nodeText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  fullPageModal: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingTop: 16,
    paddingHorizontal: 24,
    paddingBottom: 32,
    minHeight: Dimensions.get('window').height * 0.6,
    maxHeight: Dimensions.get('window').height * 0.95,
  },
  dragHandleContainer: {
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 4,
  },
  dragHandle: {
    width: 48,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ccc',
  },
  sidebarTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#222',
    textAlign: 'left',
  },
  sidebarText: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
    marginBottom: 18,
  },
  linkButton: {
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
  },
  linkText: {
    color: '#1a73e8',
    fontWeight: '600',
    fontSize: 15,
    textDecorationLine: 'underline',
  },
}); 