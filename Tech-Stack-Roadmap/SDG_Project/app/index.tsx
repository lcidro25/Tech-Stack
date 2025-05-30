import { Text, View, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function Index() {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Top-right '?' button */}
      <TouchableOpacity
        style={styles.helpButton}
        onPress={() => setModalVisible(true)}
        accessibilityLabel="Help options"
      >
        <Text style={styles.helpButtonText}>?</Text>
      </TouchableOpacity>

      {/* Main content */}
      <View style={styles.centerContent}>
        <Text style={styles.title}>Tech Stack Roadmap</Text>
        <TouchableOpacity style={styles.startButton} onPress={() => router.push("/TechStacks")}>
          <Text style={styles.startButtonText}>Start Learning</Text>
        </TouchableOpacity>
      </View>

      {/* Modal Dropdown */}
      <Modal
        transparent
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <View style={styles.dropdown}>
            <TouchableOpacity style={styles.dropdownItem} onPress={() => { setModalVisible(false); router.push("/FAQs"); }}>
              <Text style={styles.dropdownText}>FAQs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownText}>Contact Support</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownText}>Donate</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  helpButton: {
    position: 'absolute',
    top: 40,
    right: 24,
    zIndex: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  helpButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    color: '#222',
  },
  startButton: {
    backgroundColor: '#222',
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 8,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  dropdown: {
    marginTop: 80,
    marginRight: 24,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 8,
    width: 180,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  dropdownText: {
    fontSize: 16,
    color: '#222',
  },
});
