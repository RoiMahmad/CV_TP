import React from 'react'
import { Grommet, Box, Header, Heading, Text, Paragraph, Button, Footer, Markdown } from 'grommet'
import { Linkedin } from 'grommet-icons'


const App = () => {
    return(
      <Grommet>
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
        <Grommet/>
        )
}