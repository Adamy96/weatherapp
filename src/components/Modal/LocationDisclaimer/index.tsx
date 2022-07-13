import React from 'react'
import { StyleSheet, View, Modal } from 'react-native'
import { Button, Typography } from '@components'
import { colors, spacing } from '@styles'
import { useModals } from '@hooks'

const LocationDisclaimer = (props: Props) => {
  const {
    style: customStyles = null,
    onRequestClose
  } = props

  return (
    <View style={[styles.container, customStyles]}>
      <Typography size={16} align='center' style={styles.title}>
        Localização e seu tempo
      </Typography>
      <Typography style={styles.paragraph}>
        Você precisa obter informações de tempo em tempo real  sobre a sua localização?
      </Typography>
      <Typography style={styles.paragraph}>
        Esta aplicação sempre usará as informalções de localização do seu dispositivo em segundo plano, a fim de atualizar as informações meteorológicas do widget desktop, barra de notificações, previsão meteorológica local e alerta meteorológica  quando a localição muda, mesmo que o aplicativo seja fechado ou não em uso.
      </Typography>
      <Typography style={styles.paragraph}>
        Se você não quiser que o aplicativo use suas informações de localização o tempo todo, você pode escolher a permissão de posicionamento no aplicativo para visualizar o tempo em seu local atual ou inserir manualmente as informações de localização.
      </Typography>
      <Typography style={styles.paragraph}>
        As informações de localização também são usadas para suportar publicidade. Podemos usar e compartilhar suas informações com parceiros confiáveis para anúncios e fornecer e melhorar nossos serviços, e você pode alterar as permissões a qualquer momento.
      </Typography>
      <Button variant='green' text='Compreendo' accessibilityLabel='I understand' onPress={onRequestClose} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingTop: spacing.default7,
    paddingLeft: spacing.paddingPage,
    paddingRight: spacing.paddingPage,
    paddingBottom: spacing.default5
  },
  title: {
    marginBottom: spacing.default2
  },
  paragraph: {
    marginBottom: spacing.default1
  }
})

interface Props extends ModalProps {
  style?: any
}

export default LocationDisclaimer