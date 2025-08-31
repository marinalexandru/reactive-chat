import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitleStyle: {
            fontFamily: "regular",
          },
          tabBarLabelStyle: {
            fontFamily: "regular",
          },
        }}
      />
    </Tabs>
  );
}
