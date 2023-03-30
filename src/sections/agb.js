import * as React from "react"
import SectionContainer from "../components/sectionContainer";
import styled from "@emotion/styled"

const Title = styled.h1`
  margin-top: 3rem;
  font-size: 4rem;
  margin-bottom: 1rem;
`
const ContentTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`

const UnderSectionTitle = styled.h1`
  font-size: 2rem;
`

const Content = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`

const Agb = () => (
    <SectionContainer color={"#ffffff"}>
       <Title>Allgemeine Geschäftsbedingungen</Title>
        <ContentTitle>I. Allgemeines</ContentTitle>
        <UnderSectionTitle>A. Inhalt und Geltung</UnderSectionTitle>
        <Content>Der Vertragsgegenstand ist in Nachträgen zu diesem Vertrag niedergelegt.
            Die allgemeinen Geschäftsbedingungen gelten, wenn die Parteien sie ausdrücklich oder stillschweigend
            anerkennen. Änderungen und Nebenabreden sind nur wirksam, soweit der Lieferant sie schriftlich bestätigt.</Content>
        <UnderSectionTitle>B. Erfüllungsort</UnderSectionTitle>
        <Content>Soweit kein besonderer Erfüllungsort von den Parteien verabredet ist oder aus der Natur des Geschäftes
            hervorgeht, gilt als Lieferung die Bereitstellung der Produkte am Sitz des Lieferanten.</Content>
        <UnderSectionTitle>C. Software und Know-how</UnderSectionTitle>
        <Content>Der Kunde darf die überlassene Software, das Know-how, die Datenträger und Dokumentation im vorgesehenen
            Umfange selbst benützen, nicht aber an Dritte weitergeben. Das Eigentum daran und das Recht zur weiteren
            Verwendung bleibt beim Lieferanten oder seinen Lizenzgebern, auch wenn der Kunde Software-Programme oder
            Know-how-Aufzeichnungen nachträglich ändert.
                Jede Erweiterung oder Änderung der Software durch den Kunden benötigt die schriftliche Zustimmung des
                Lieferanten.
                Der Kunde darf für Sicherheits- und Archivzwecke von der Software höchstens drei Kopien erstellen. Eine
                grössere Anzahl Kopien oder die Verwendung für andere Zwecke benötigt die ausdrückliche Zustimmung des
                Lieferanten.
                Der Kunde hat auf allen Modifikationen und Kopien die gleichen Schutzrechtsvermerke wie auf dem Original
                anzubringen.</Content>
        <UnderSectionTitle> D. Dokumentation</UnderSectionTitle>
        <Content>Der Kunde hat ein Anrecht auf ein Exemplar der Benutzerdokumentation in der üblichen Ausführung des
            Lieferanten. Zusätzliche Exemplare oder Dokumentationen in nicht bereits vorhandenen Sprachen darf der
            Lieferant gesondert in Rechnung stellen.
                Abweichungen in der Dokumentation, namentlich bei Beschreibungen und Abbildungen, sind zulässig, sofern die
                Unterlagen ihre Zwecke erfüllen.</Content>
        <UnderSectionTitle> E. Diskretion</UnderSectionTitle>
        <Content>Beide Parteien werden sämtliche Informationen aus dem Geschäftsbereich des andern, die weder allgemein
            zugänglich noch allgemein bekannt sind, Dritten nicht offenbaren und alle Anstrengungen unternehmen, um
            Dritte am Zugang zu diesen Informationen zu hindern. Andererseits darf jede Partei in ihrer angestammten
            Tätigkeit Kenntnisse weiterverwenden, die sie bei der Geschäftsabwicklung erwirbt.
                Die Parteien überbinden diese Verpflichtung auch ihren Mitarbeitern und Erfüllungsgehilfen.</Content>
        <UnderSectionTitle> F. Informationspflicht des Kunden</UnderSectionTitle>
        <Content>Der Kunde hat den Lieferanten rechtzeitig auf besondere technische Voraussetzungen sowie auf die
            gesetzlichen, behördlichen und anderen Vorschriften am Bestimmungsort aufmerksam zu machen, soweit sie für
            die Ausführung und den Gebrauch der Produkte von Bedeutung sind.</Content>
        <UnderSectionTitle> G. Termine</UnderSectionTitle>
        <Content>Verbindlich sind ausschliesslich schriftlich zugesicherte Termine, wie insbesondere Bereitschaftszeiten
            ausserhalb der üblichen Arbeitszeit, eine bestimmte Reparaturzeit oder eine Reaktionszeit etc. Solche
            Termine verlängern sich angemessen,
                a) wenn dem Lieferanten Angaben, die er für die Ausführung benötigt, nicht rechtzeitig zugehen oder wenn der
                Kunde sie nachträglich ändert;
                b) wenn der Kunde mit den von ihm auszuführenden Arbeiten im Rückstand oder mit der Erfüllung seiner
                vertraglichen Pflichten im Verzug ist, insbesondere wenn er Zahlungsbedingungen nicht einhält;
                c) wenn Hindernisse auftreten, die ausserhalb des Willens des Lieferanten liegen, wie Naturereignisse,
                Mobilmachung, bewaffnete Konflikte, Krieg, Aufruhr, Epidemien, Unfälle, erhebliche Betriebsstörungen,
                Arbeitskonflikte, verspätete oder fehlerhafte Zulieferungen sowie behördliche Massnahmen.
                Der Lieferant kann Teillieferungen ausführen.
                Bei Verzögerungen hat der Kunde dem Lieferanten eine angemessene Frist zur nachträglichen Erfüllung
                anzusetzen. Erfüllt der Lieferant bis zum Ablauf dieser Nachfrist nicht, darf der Kunde, sofern er es innert
                drei Tagen erklärt, auf die nachträgliche Leistung verzichten oder vom Vertrag zurücktreten.
                Trägt der Lieferant nachweisbar die Schuld am Terminverzug, hat der Kunde trotz nachträglicher Erfüllung,
                Leistungsverzicht oder Vertragsrücktritt Anspruch auf Ersatz des tatsächlichen Schadens, jedoch auf
                höchstens zwanzig Prozent des Wertes der verspäteten Lieferung. Weitere Ansprüche aus Verzögerungen sind
                ausgeschlossen.</Content>
        <UnderSectionTitle> H. Abnahme</UnderSectionTitle>
        <Content>Sofern kein besonderes Abnahmeverfahren vereinbart ist, hat der Kunde die Produkte selbst zu prüfen und
            allfällige Mängel schriftlich bekannt zu geben. Unterlässt der Kunde die Anzeige innerhalb von vier Wochen
            nach der Lieferung, gelten alle Funktionen als erfüllt und die Lieferung als genehmigt.
                Zeigen sich später innerhalb der Garantiefrist Mängel, die auch bei sorgfältiger Prüfung nicht hätten
                entdeckt werden können, hat sie der Kunde dem Lieferanten sofort schriftlich anzuzeigen. Andernfalls gilt
                die Lieferung trotz dieser Mängel als genehmigt.</Content>
        <UnderSectionTitle> I. Garantie</UnderSectionTitle>
        <Content>Der Lieferant garantiert, dass er die Produkte in funktionstüchtigem Zustand liefert und er die für
            Unterstützungs-, Wartungs- und Serviceleistungen erforderliche Sorgfalt anwendet.
                Bei Mängeln zufolge Material-, Konstruktions- und Ausführungsfehlern oder bei nachgewiesener Unsorgfalt bei
                Unterstützungs-, Wartungs- oder Serviceleistungen verpflichtet sich der Lieferant zur Beseitigung der Fehler
                oder zum Ersatz der betroffenen Teile.
                Davon ausgeschlossen sind vom Lieferanten nicht zu vertretende Mängel und Störungen, wie insbesondere
                natürliche Abnützung (ausser bei Hardware-Wartung), höhere Gewalt, unsachgemässe Behandlung, Eingriffe des
                Kunden oder Dritter, übermässige Beanspruchung, ungeeignete Betriebsmittel oder extreme Umgebungseinflüsse.
                Der Lieferant behebt die Mängel nach seiner Wahl in seinen Räumen oder beim Kunden, der dem Lieferanten
                freien Zugang zu gewähren hat. Demontage- und Montage-, Transport-, Verpackungs-, Reise- und
                Aufenthaltskosten gehen zu Lasten des Kunden. Ersetzte Teile werden Eigentum des Lieferanten.
                Kann der Mangel nicht beseitigt werden, hat der Kunde Anspruch auf eine Preisminderung und den Ersatz des
                nachgewiesenen, unmittelbaren Schadens, insgesamt jedoch auf höchstens zwanzig Prozent des Wertes der
                mangelhaften Produkte oder Leistung. Weitere Ansprüche sind ausgeschlossen; insbesondere kann der Kunde
                nicht vom Vertrag zurücktreten oder den Ersatz von Folgeschäden verlangen.
                Die Gewährleistungsfrist beträgt sechs Monate ab Lieferung des Produktes bzw. der Leistung bzw. bei
                Hardware-Wartung sechs Monate ab Vertragsende.</Content>
        <UnderSectionTitle> J. Weitere Haftung</UnderSectionTitle>
        <Content>Der Lieferant haftet im Rahmen seiner Haftpflichtversicherung für weiteren Personen- und Sachschaden, der
            dem Kunden nachweisbar durch Verschulden des Lieferanten entsteht. Weitere Ansprüche sind ausgeschlossen.</Content>
        <UnderSectionTitle> K. Preise und Zahlungsbedingungen</UnderSectionTitle>
        <Content>Die Preise verstehen sich, soweit nicht anders vermerkt, in Schweizerfranken ohne Mehrwertsteuer, Gebühren,
            Abgaben, Zölle, Reisespesen, Transport, Verpackung, Versicherung, Installation, Inbetriebnahme, Schulung und
            Anwendungsunterstützung.
                Entschädigungen für wiederkehrende Leistungen sind im Voraus zu bezahlen.
                Sie sind zur Zahlung fällig netto innert dreissig Tagen seit Rechnungsstellung. Verzug löst ohne besondere
                Mahnung einen Verzugszins aus in der Höhe von vier Prozent über dem jeweiligen Diskontsatz der
                Schweizerischen Nationalbank am Tag der Fälligkeit.
                Die Verrechnung von Forderungen durch den Kunden ist ausgeschlossen.</Content>
        <UnderSectionTitle> L. Besondere Voraussetzungen beim Kunden</UnderSectionTitle>
        <Content>Der Lieferant kann seine Leistungen nur erbringen, wenn je nach den vereinbarten Leistungen der Kunde die
            notwendigen Massnahmen trifft, insbesondere:
                a) den erforderlichen Platz für die Geräte samt Zubehör sowie die erforderlichen Geräteanschlüsse, wo nötig
                in klimatisierten Räumen, nach den Spezifikationen des Lieferanten zur Verfügung stellt;
                b) den Lieferanten rechtzeitig auf besondere technische Voraussetzungen sowie auf die gesetzlichen,
                behördlichen und anderen Vorschriften am Bestimmungsort aufmerksam macht, soweit sie für die
                vertragskonforme Leistung von Bedeutung sind;
                c) einen fachkundigen Mitarbeiter bezeichnet, der sich dem Wartungs- oder Unterstützungspersonal zur
                Verfügung hält;
                d) die Geräte mit der gebotenen Sorgfalt und nach den Anleitungen des Lieferanten benützt, nicht
                überdurchschnittlich beansprucht, die Anforderungen an die Umgebung erfüllt und die üblichen
                Reinigungsarbeiten durchführt;
                e) dem Lieferanten freien Zugang zu den Geräten, Datenträgern und Dokumentationen gewährt und ihm die
                notwendigen Räumlichkeiten zur Verfügung stellt;
                f) die notwendigen Kommunikationssysteme zur Verfügung stellt, damit der Lieferant beim Remote-Service die
                Abklärungen treffen und die Eingriffe in das System direkt vornehmen kann, beispielsweise durch Installation
                eines Modems und der notwendigen Kommunikationssoftware;
                g) die allenfalls für die Wartungsarbeiten geeigneten Räume zur Aufbewahrung von Werkzeugen, Material und
                Ersatzteilen zur Verfügung stellt.
                Für Aufwendungen, die durch mangelhafte Voraussetzungen beim Kunden entstehen, darf der Lieferant zusätzlich
                Rechnung stellen.</Content>
        <UnderSectionTitle> M. Reaktions- und Bereitschaftszeiten</UnderSectionTitle>
        <Content>Wenn zwischen dem Lieferanten und dem Kunden ausdrücklich eine bestimmte Reaktionszeit vereinbart ist,
            verpflichtet sich der Lieferant, innerhalb der vereinbarten Anzahl Stunden nach Anforderung der
            vertragskonformen Leistung mit seinen Arbeiten zu beginnen. Für beim Kunden erbrachte Leistungen gilt der
            Antritt der Reise als Arbeitsbeginn.
                Die vertragskonformen Leistungen werden erbracht während den beim Lieferanten üblichen Arbeitszeiten, jedoch
                nicht während Betriebsferien des Lieferanten oder lokalen Feiertagen.</Content>
        <UnderSectionTitle> N. Dauer des Rechtsverhältnisses</UnderSectionTitle>
        <Content>Ist nichts Besonderes vereinbart, kann ein Rechtsverhältnis über Hardware-Wartung oder
            Software-Unterstützung jederzeit unter Einhaltung einer dreimonatigen Kündigungsfrist aufgelöst werden.
            Kaufverträge werden mit Erbringung der beidseitigen, vertragskonformen Leistung erfüllt.</Content>
        <UnderSectionTitle> O. Export</UnderSectionTitle>
        <Content>Der Kunde ist verantwortlich für die Einhaltung von in- und ausländischen Exportvorschriften. Die
            Wiederausfuhr gewisser Produkte mit ausländischem Ursprung ist gemäss einer der Abteilung für Ein- und
            Ausfuhr des Eidgenössischen Volkswirtschaftsdepartementes gegenüber eingegangenen Verpflichtung nur mit
            einer Bewilligung dieser Amtsstelle gestattet (Rüstungsexport). Der Lieferant bezeichnet die betreffenden
            Produkte ausdrücklich in Offerten und Rechnungen, womit die Auflage auf den Kunden übergeht.</Content>
        <UnderSectionTitle> P. Weiterverkauf</UnderSectionTitle>
        <Content>Soweit nicht Parteiabrede oder die Natur des Geschäftes entgegenstehen, darf der Kunde die Produkte
            verändert oder unverändert weiterveräussern.
                Falls der Kunde die Produkte weiterveräussert, hat er sicherzustellen, dass sämtliche Pflichten aus
                Software-Lizenzen, aus Geheimhaltung sowie aus allfälligen Bewilligungsvorbehalten für die Wiederausfuhr auf
                die jeweiligen Abnehmer übergehen.</Content>
        <ContentTitle>II. Kaufverträge</ContentTitle>
        <UnderSectionTitle>A. Umfang, Ausführung und Ort der Lieferung</UnderSectionTitle>
        <Content>Für Umfang und Ausführung der Lieferung ist die Bestellungsbestätigung massgebend. Der Lieferant liefert die
            Produkte in der Standardausführung, Software in ihrer maschinell lesbaren Form nach der gültigen Version im
            Zeitpunkt der Lieferung.
                Stellt der Lieferant die Produkte ganz oder teilweise in einer besonderen Ausführung für den Kunden her,
                richten sich seine Arbeiten nach dem Pflichtenheft, worin der Kunde unter anderem anzugeben hat, unter
                welchen Bedingungen welches Ergebnis angestrebt wird.
                Änderungen gegenüber der Bestellungsbestätigung sind zulässig, sofern die Produkte die gleichen Funktionen
                erfüllen. Der Lieferant ist jedoch nicht verpflichtet, derartige Änderungen auch an Produkten vorzunehmen,
                die bereits hergestellt oder geliefert sind.</Content>
        <ContentTitle>III. Wartung & Service von Hardware</ContentTitle>
        <UnderSectionTitle>A. Vollwartung und Depotwartung</UnderSectionTitle>
        <Content>Bei der Vollwartung erbringt der Lieferant die Wartungsleistungen am Standort der Geräte.
            Bei der Depotwartung erbringt der Lieferant die Wartungsleistungen in seinen eigenen Werkstätten. Zu diesem
            Zweck sind die Geräte dem Lieferanten in der Original- oder in einer gleichwertigen Verpackung zuzustellen.
            Das Risiko des Transportes trägt der Kunde. Die Reparaturzeit beträgt in der Regel fünf Arbeitstage,
            gerechnet zwischen Eintreffen der Geräte beim Lieferanten und dem Versand an den Kunden.</Content>
        <UnderSectionTitle>B. Umfang der Wartung</UnderSectionTitle>
        <Content>Für den Umfang und die Ausführung der Wartung ist die Abmachung unter den Parteien massgebend. Ohne
            besondere Abrede sind folgende Wartungsleistungen in den Preisen inbegriffen:
                a) das Beheben von Störungen nach Eingang einer qualifizierten Störungsmeldung, d.h. einer Störungsmeldung,
                aufgrund welcher die Intervention eines Technikers notwendig wird;
                b) der Einbau von Ersatzteilen auf Austauschbasis, ausgetauschte Teile gehen in das Eigentum der
                Wartungsfirma über;
                c) der Einbau von technischen Verbesserungen, soweit diese nach Beurteilung der Wartungsfirma für die
                Funktion der Geräte notwendig sind oder deren Unterhalt erleichtern;
                d) bei der Vollwartung zusätzlich die vorbeugende Wartung mit Präventivkontrollen; der Lieferant teilt dem
                Kunden den dafür notwendigen Zeitaufwand und den Zeitpunkt rechtzeitig mit.
                Für weitere Leistungen ist der Lieferant berechtigt, zusätzlich Rechnung zu stellen, insbesondere wenn:
                a) Störungen oder Schäden zu beheben sind, die durch Eingriffe Dritter oder durch unsachgemässe Behandlung
                sowie durch äussere Einflüsse verursacht wurden;
                b) Störungen zu beheben sind oder bei der Wartung Mehraufwendungen anfallen, weil die Installationen oder
                Standorte (Raumgrössen, Umfeld, Anschlüsse) nicht den Anweisungen des Lieferanten entsprechen;
                c) an den Steuerungen Änderungen vorgenommen oder Zusatzeinrichtungen eingebaut wurden oder Störungen auf
                Datenübermittlungs-Leitungen und -Geräte sowie elektrische Installationen und Klimaanlagen zurückgehen, für
                die Dritte verantwortlich sind;
                d) Zubehör oder Zusatzeinrichtungen eingebaut oder entfernt werden müssen, oder die Gehäuse aufzufrischen
                sind;
                e) Teile ausgetauscht werden müssen oder anderweitig Mehrkosten entstehen, weil der Kunde Zubehör verwendet
                hat, das nicht den richtigen Spezifikationen entspricht;
                f) bei der Vollwartung der Standort der Anlage wechselt.</Content>
        <UnderSectionTitle>C. Eintrittsinspektion</UnderSectionTitle>
        <Content>Der Lieferant ist berechtigt, eine Eintrittsinspektion durchzuführen, ausgenommen wenn ein Gerät bei
            Lieferung durch den Lieferanten unmittelbar nach Ablauf der Garantiezeit in den Wartungsvertrag aufgenommen
            wird, oder wenn ein Gerät aus einem bestehenden Wartungsvertrag aufgenommen wird.
                Die Eintrittsinspektion umfasst das Beheben von Störungen und den Einbau von technischen Verbesserungen auf
                einen für die einwandfreie Wartung erforderlichen Stand.
                Die Kosten der Eintrittsinspektion gehen zu Lasten des Kunden. Verweigert der Kunde die Eintrittsinspektion,
                fällt die Wartungsverpflichtung dahin.</Content>
        <ContentTitle>IV. Service & Wartung von Software</ContentTitle>
        <UnderSectionTitle>A. Umfang und Ausführung der Unterstützung</UnderSectionTitle>
        <Content>Für Umfang und Ausführung der Unterstützungsleistung ist die Abmachung unter den Parteien massgebend.
            Dabei bedeuten:
                a) Anwendungsberatung: Beratung über die richtige Anwendung der Software, namentlich über deren
                zweckgerechten Gebrauch und Einsatz.
                b) Kundenschulung: Ausbildung über den richtigen projektspezifischen Gebrauch der Software.
                c) Fehlerbeseitigung: Programmänderungen mit dem Ziel, Fehler oder Schwächen der Software zu beseitigen, die
                einen einwandfreien Betrieb hindern; keine Änderungen über die ursprünglichen Anforderungen hinaus.
                d) Modifikationen: Programmänderungen mit dem Ziel, auch nichtbetriebsbehindernde Fehler oder Schwächen der
                Software zu beseitigen; keine Änderungen über die ursprünglichen Anforderungen hinaus.
                e) Nachlieferung von Modulen: Nachlieferung eines bereits bestehenden, zum bisherigen Software-Paket
                passenden Teiles; ohne zusätzliche Ingenieurleistungen.
                f) Behebung von Datenverlust oder Datenfehlern: Wiederherstellung eines verlorenen oder Korrigieren eines
                fehlerhaften Datenbestandes, soweit dies aufgrund der vom Kunden zu verantwortenden Datensicherungen möglich
                ist.
                g) Zulieferung neuer Releases: Unaufgeforderte Zulieferung von vorhandenen neuen Software-Versionen und den
                dazugehörenden Dokumentationen auf den passenden Datenträgern; ohne zusätzliche Ingenieurleistungen.
                h) Erweiterungen: Kundenspezifische Programmänderungen; mit entsprechenden Ingenieurleistungen und über die
                ursprünglichen Anforderungen hinaus.
                i) Integration: Kundenspezifische Einführung neuer, zusätzlicher oder fremder Standard-Software; mit
                entsprechender Ingenieurleistung.
                j) Kundeninformation: Schriftliche Orientierung über Software-Erneuerungen sowie Programmierhinweise.</Content>
        <UnderSectionTitle>B. Art der Leistungserbringung</UnderSectionTitle>
        <Content>Die Unterstützungsleistungen erbringt der Lieferant am Standort des Kunden oder am Standort des zuständigen
            technischen Dienstes des Lieferanten, je nach ihrer Natur, allenfalls nach seiner Wahl,
                a) in den eigenen Räumen;
                b) beim Kunden;
                c) mit Telekommunikation als Austausch von Informationen zwischen den Sachbearbeitern des Lieferanten und
                des Kunden;
                d) mit Remote-Service als Ferndiagnose und Ferneinwirkung mittels direkter Informationsübertragung zwischen
                dem System des Lieferanten und dem System des Kunden;
                e) mit Brief- und Paketzustellung.</Content>
                <ContentTitle>V. Teilnichtigkeit</ContentTitle>
                <Content>Sollten einzelne Vereinbarung gegen geltendes Recht verstossen wird dadurch nicht der gesamte Vertrag
                    nichtig. Die nichtigen Klauseln werden durch sinngemässe, konforme Regelungen ersetzt.</Content>
                <ContentTitle>VI. Gerichtsstand und anwendbares Recht</ContentTitle>
                <Content>Alle Streitigkeiten aus diesem Vertrag unterstehen materiellem schweizerischem Recht, unter Ausschluss des
                    Wiener Kaufrechts. Gerichtsstand ist Muri AG.</Content>

                    <Content>Version: 1.0
                        Stand: 29.03.2023</Content>

    </SectionContainer>
)

export default Agb