import React from 'react'
import { Grommet, Box, Header, Heading, Text, Paragraph, Button, Footer, Markdown } from 'grommet'
import { Linkedin } from 'grommet-icons'


const theme = {
  "name": "aruba",
  "rounding": 4,
  "spacing": 24,
  "defaultMode": "light",
  "global": {
    "colors": {
      "brand": "orange",
      "background": {
        "dark": "black",
        "light": "white"
      },
      "background-back": {
        "dark": "black",
        "light": "white"
      },
      "background-front": {
        "dark": "black",
        "light": "white"
      },
      "background-contrast": {
        "dark": "dark-grey",
        "light": "white"
      },
      "text": {
        "dark": "white",
        "light": "grey"
      },
      "text-strong": {
        "dark": "white",
        "light": "black"
      },
      "text-weak": {
        "dark": "white",
        "light": "light-grey"
      },
      "text-xweak": {
        "dark": "#999999",
        "light": "#666666"
      },
      "border": {
        "dark": "#444444",
        "light": "#CCCCCC"
      },
      "control": {
        "light": "#ED6F00",
        "dark": "#EF8B27"
      },
      "active-background": "background-contrast",
      "active-text": "text-strong",
      "selected-background": "brand",
      "selected-text": "text-strong",
      "status-critical": "#dd3000",
      "status-warning": "#f0c954",
      "status-ok": "#008375",
      "status-unknown": "#C3C5C8",
      "status-disabled": "#C3C5C8",
      "graph-0": "brand",
      "graph-1": "blue",
      "green": {
        "dark": "#d5d848",
        "light": "#d5d848"
      },
      "green!": "#d5d848",
      "blue": {
        "dark": "#9fd4c9",
        "light": "#004876"
      },
      "blue!": "#9fd4c9",
      "grey": {
        "dark": "#646569",
        "light": "#646569"
      },
      "grey!": "#646569",
      "graph-2": "green"
    },
    "font": {
      "family": "Comic Sans MS"
    },
    "active": {
      "background": "active-background",
      "color": "active-text"
    },
    "hover": {
      "background": "active-background",
      "color": "active-text"
    },
    "selected": {
      "background": "selected-background",
      "color": "selected-text"
    }
  },
  "layer": {
    "background": {
      "dark": "#111111",
      "light": "#FFFFFF"
    }
  }
}
export default () => {

  return (
    <Grommet full theme={theme}>

      <Box align="center" justify="center" pad="small" background={{ "image": "url('https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero.jpg')" }} height="xlarge" flex={false} fill="vertical" direction="row" wrap overflow="auto">
      <Box align="center" justify="center" alignSelf="start" fill="horizontal" direction="row">
          <Header align="center" direction="row" flex justify="center" gap="medium" fill="horizontal">
            <Heading color="black">
              Axel Jan Mahamad Curriculum Vitae
            </Heading>
          </Header>
        </Box>
        <Box align="center" pad="small" background={{ "color": "white", "position": "bottom" }} round="medium" elevation="xlarge" margin="medium" direction="column" alignSelf="center" animation={{ "type": "fadeIn", "size": "medium" }} flex>
          <Box align="center" justify="center" pad="xsmall" margin="xsmall">
            <Box align="center" justify="center" pad="large" margin="xsmall" background={{ "color": "light-2" }} round="full" height="medium" width="medium" />

            <Heading level="2" size="medium" margin="xsmall" textAlign="center">
              Axel Jan Mahamad
            </Heading>
            <Text textAlign="center">
              Alternant en Informatique
            </Text>
          </Box>
        </Box>

        <Box align="center" pad="small" background={{ "color": "white", "position": "bottom" }} round="medium" elevation="xlarge" margin="large" direction="column" alignSelf="center" animation={{ "type": "fadeIn", "size": "medium" }} flex>
          <Box align="center" justify="center" pad="xsmall" margin="xsmall" direction="column">
            <Paragraph size="small" margin={{ "top": "medium", "bottom": "xsmall" }} textAlign="center">
              -Etudiant en Mastère Informatique Logiciel et IOT chez Ynov Campus Toulouse
            </Paragraph>
            <Paragraph size="small" margin="xsmall" textAlign="center">
              -Alternant développeur apprenti chez CGx Aéro
            </Paragraph>
            <Paragraph size="small" margin="xsmall" textAlign="center">
              Contact :
            </Paragraph>
            <Paragraph size="small" margin="xsmall" textAlign="center">
              - 0695173538
            </Paragraph>
            <Paragraph size="small" margin="xsmall" textAlign="center">
              - axeljan31@gmail.com
            </Paragraph>
            <Paragraph size="small" margin="xsmall" textAlign="center">
              Compétences :
            </Paragraph>
            <Paragraph size="small" margin="xsmall" textAlign="center">
              - Permis B
            </Paragraph>
            <Paragraph size="small" margin="xsmall" textAlign="center">
              - A2 Espagnol
            </Paragraph>
            <Paragraph size="small" margin={{ "bottom": "medium", "top": "xsmall" }} textAlign="center">
              - B2 Anglais
            </Paragraph>
            <Box align="center" justify="center" pad="small" direction="row-responsive" flex alignSelf="center" basis="xxsmall" gap="small" margin="xsmall">
              <Button label="Linked In" primary plain={false} active icon={<Linkedin />} type="button" margin="medium" />
            </Box>
          </Box>
        </Box>

        <Box align="center" pad="small" background={{ "color": "white", "position": "bottom" }} round="medium" elevation="xlarge" margin="medium" direction="column" alignSelf="center" animation={{ "type": "fadeIn", "size": "medium" }} width="xlarge" flex="shrink" fill="horizontal">
          <Box align="center" justify="center" pad="xsmall" margin="xsmall" flex="grow" fill="horizontal" direction="column">
            <Heading level="2" size="medium" margin="xsmall" textAlign="center">
              Expériences Professionnelles
            </Heading>
            <Text textAlign="center" margin={{ "top": "small" }}>
              CGx Aéro - Début 2019 / Aujourd'hui
            </Text>
            <Paragraph size="small" margin="xsmall" textAlign="center" fill>
              CGX société spécialisé dans la création et le développement de logiciels pour la cartographie des espaces aériens pour les aéroports du monde.
            </Paragraph>
            <Paragraph size="small" margin="xsmall" textAlign="center" fill>
              Automatisation de tests fonctionnels, débogage et développement desproduits de l'entreprise en C#/C++.
              </Paragraph>
            <Paragraph size="small" margin="xsmall" textAlign="center" fill>
              Création d'une application qui permet l'automatisation de tests avec Jenkins
            </Paragraph>
            <Text textAlign="center" margin={{ "top": "medium" }}>
              Assistant gestionnaire de résidences - Octobre 2017 / Avril 2019
            </Text>
            <Paragraph size="small" margin="xsmall" textAlign="center" fill>
              Société gestionnaire de résidences étudiante.
              </Paragraph>
            <Paragraph size="small" margin="xsmall" textAlign="center" fill>
              Gestionnaire en CDI étudiant (12h/semaine) dans trois résidences
              </Paragraph>
            <Paragraph size="small" margin="xsmall" textAlign="center" fill>
              étudiantes. Distribution du courrier, gestion des demandes des résidents, permanence de l’accueil, entretien des appartements et des parties communes, état des lieux des entrées et des sorties.
              </Paragraph>
          </Box>
        </Box>

        <Box align="center" pad="small" background={{ "color": "white", "position": "bottom" }} round="medium" elevation="xlarge" margin="medium" direction="column" alignSelf="center" animation={{ "type": "fadeIn", "size": "medium" }} fill="horizontal" flex="shrink">
          <Box align="center" justify="center" pad="xsmall" margin="xsmall" fill="horizontal">
            <Heading level="2" size="medium" margin="xsmall" textAlign="center">
              Diplômes et Formations
            </Heading>
            <Text textAlign="center" margin={{ "top": "small" }}>
              Bachelor 3 et Mastère 1 - Ynov Campus Toulouse - 2019 / 2021
            </Text>
            <Paragraph size="small" margin="xsmall" textAlign="center" fill>
              Actuellement en mastère 1 Informatique, Développement Logiciel Mobile et IOT. En alternace au rythme de 2,5 jours /semaine.
            </Paragraph>
            <Paragraph size="small" margin="xsmall" textAlign="center" fill>
              Bachelor Informatique en 3ème année en alternance obtenu en 2020. Rythme de 2,5 jours par
              semaine en entreprise.
            </Paragraph>
            <Paragraph size="small" margin="xsmall" textAlign="center" fill>
              Etudes de l'informatique web, de l'infra, du management. Spécialisation
              logiciels.
            </Paragraph>
            <Text textAlign="center" margin={{ "top": "small" }}>
              Licence 1 et 2 MIASHS - Université Toulouse Jean Jaurès - 2017 / 2019
            </Text>
            <Paragraph size="small" margin="xsmall" textAlign="center" fill>
              Deux années de licence en Mathématiques Informatique appliquées aux
              Sciences Humaines et Sociales.
              Formation : Dominante Informatique. Mathématiques, Gestion, Comptabilité
              et Anglais.
            </Paragraph>
            <Text textAlign="center" margin={{ "top": "small" }}>
              1er année de classe préparatoire - EPITA Paris - 2016 / 2017
            </Text>
            <Paragraph size="small" margin="xsmall" textAlign="center" fill>
              EPITA : Ecole d'Ingénieur Informatique. Cursus suivi : première année.
              </Paragraph>
            <Paragraph size="small" margin="xsmall" textAlign="center" fill>
              Matières enseignées : Informatique, Algorithmie, Mathématiques,
              Electronique, Physiques, Anglais.Sciences Humaines et Sociales.
              Formation : Dominante Informatique. Mathématiques, Gestion, Comptabilité
              et Anglais.
            </Paragraph>
          </Box>
        </Box>

        <Box align="center" pad="small" background={{ "color": "white", "position": "bottom" }} round="medium" elevation="xlarge" margin="medium" direction="column" alignSelf="center" animation={{ "type": "fadeIn", "size": "medium" }} flex>
          <Box align="center" justify="center" pad="xsmall" margin="xsmall">
            <Heading level="2" size="medium" margin="xsmall" textAlign="center">
              Chris Carlozzi
            </Heading>
            <Text textAlign="center">
              Product Designer
            </Text>
            <Paragraph size="small" margin="medium" textAlign="center">
              I'm a  designer in SF. I work with folks that are innovators willing to make the next big idea. What do you want to make?
            </Paragraph>
          </Box>
        </Box>

        <Box align="center" pad="small" background={{ "color": "white", "position": "bottom" }} round="medium" elevation="xlarge" margin="medium" direction="column" alignSelf="center" animation={{ "type": "fadeIn", "size": "medium" }} flex>
          <Box align="center" justify="center" pad="xsmall" margin="xsmall">
            <Heading level="2" size="medium" margin="xsmall" textAlign="center">
              Chris Carlozzi
            </Heading>
            <Text textAlign="center">
              Product Designer
            </Text>
            <Paragraph size="small" margin="medium" textAlign="center">
              I'm a  designer in SF. I work with folks that are innovators willing to make the next big idea. What do you want to make?
            </Paragraph>
          </Box>

        </Box>
        <Box align="center" justify="center" fill="horizontal">
          <Footer align="center" direction="row" flex={false} justify="center" gap="medium" fill="horizontal">
            <Markdown>
              Copyright Axel Jan Mahamad 2020 - Ynov Toulouse - Create with Grommet - Comic Sans MS is the best font ever
            </Markdown>
          </Footer>
        </Box>
      </Box>
    </Grommet>
  )
}