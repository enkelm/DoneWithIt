import { useState } from "react"
import { FlatList } from "react-native"

import { ListItem, ListItemDeleteActionEvent, ListItemSeparator, SafeAreaView } from "../../../components"

const initialMessages = [
  {
    id: 1,
    title: "pscRrbNNMhPtQ",
    description: "Lorem ipsum dolor sit amet.",
    image: { source: require("../../../../assets/icon.png") },
  },
  {
    id: 2,
    title: "Lorem, ipsum.",
    description: "Lorem ipsum dolor sit amet.",
    image: { source: require("../../../../assets/icon.png") },
  },
]

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)

  return (
    <SafeAreaView>
      <FlatList
        data={messages}
        keyExtractor={(m) => m.id.toString()}
        renderItem={({ item: { id, title, description, image } }) => (
          <ListItem
            key={id}
            title={title}
            subTitle={description}
            image={image}
            onPress={() => console.log(image)}
            renderRightActions={ListItemDeleteActionEvent}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(initialMessages.filter((x) => x.id === 2))
        }}
      />
    </SafeAreaView>
  )
}

export default MessagesScreen
