import * as React from 'react'
import { useState } from 'react'
import { View, Text, Button, StyleSheet, Switch } from 'node-webrender/lib/react'

const items = [
  { name: 'postgres', active: true, status: 'connected' },
  { name: 'cockpit', active: false, status: '' },
  { name: 'netdata', active: true, status: 'connecting' },
]

const App = () => {
  const [, refresh] = useState(0)

  const toggleActive = (it) => {
    it.active = ! it.active
    console.log(it)
    refresh(0)
  }

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {items.map((it, i) => <Row key={i} style={{ marginVertical: 8 }}>
        <View style={{  }}>
          <Text style={{ lineHeight: 16, borderWidth: 1, borderColor: '#888888' }}>{it.name}</Text>
          <Text style={{ fontSize: 12, color: '#aaaaaa', lineHeight: 12, borderWidth: 1, borderColor: '#888888' }}>{it.status}</Text>
        </View>
        <Switch value={it.active} onValueChange={() => toggleActive(it)} />
      </Row>)}
    </View>
  )
}

const Row = ({ children, style = undefined }) => <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }, style]}>{children}</View>

const Col = ({ children }) => <View style={{ flex: 1, justifyContent: 'flex-start', borderColor: '#cccccc', borderWidth: 1 }}>{children}</View>

const styles = StyleSheet.create({

})

export default App
