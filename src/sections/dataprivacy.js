import * as React from "react"
import SectionContainer from "../components/sectionContainer";
import styled from "@emotion/styled"

const Title = styled.h1`
  margin-top: 3rem;
  font-size: 4rem;
  margin-bottom: 1rem;
`

const UnderSectionTitle = styled.h1`
  font-size: 2rem;
`

const Content = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`
const ContentLoc = styled.p`
  font-size: 1rem;
`


const DataPrivacy = () => (
    <SectionContainer color={"#ffffff"}>
        <Title>Datenschutzerklärung</Title>
        <Content>Verantwortliche Stelle im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung
            (DSGVO), ist:</Content>
        <ContentLoc>TEQLY GmbH</ContentLoc>
        <ContentLoc>Europa-Strasse 30</ContentLoc>
        <Content>8152 Glattbrugg</Content>
        <ContentLoc>E-Mail: info@teqly.ch</ContentLoc>
        <Content>Telefon: 056 511 11 33</Content>
        <UnderSectionTitle>Allgemeiner Hinweis</UnderSectionTitle>
        <Content>Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und den datenschutzrechtlichen
            Bestimmungen
            des Bundes (Datenschutzgesetz, DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre sowie auf
            Schutz vor Missbrauch ihrer persönlichen Daten. Die Betreiber dieser Seiten nehmen den Schutz Ihrer
            persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend
            der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            In Zusammenarbeit mit unseren Hosting-Providern bemühen wir uns, die Datenbanken so gut wie möglich vor
            fremden Zugriffen, Verlusten, Missbrauch oder vor Fälschung zu schützen.
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
            Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
            nicht möglich.

            Durch die Nutzung dieser Website erklären Sie sich mit der Erhebung, Verarbeitung und Nutzung von
            Daten gemäss der nachfolgenden Beschreibung einverstanden. Diese Website kann grundsätzlich ohne
            Registrierung besucht werden. Dabei werden Daten wie beispielsweise aufgerufene Seiten bzw. Namen
            der abgerufenen Datei, Datum und Uhrzeit zu statistischen Zwecken auf dem Server gespeichert, ohne
            dass diese Daten unmittelbar auf Ihre Person bezogen werden. Personenbezogene Daten, insbesondere
            Name, Adresse oder E-Mail-Adresse werden soweit möglich auf freiwilliger Basis erhoben. Ohne Ihre
            Einwilligung erfolgt keine Weitergabe der Daten an Dritte.</Content>


        <UnderSectionTitle>Datenschutzerklärung für Cookies</UnderSectionTitle>
        <Content>Diese Website verwendet Cookies. Das sind kleine Textdateien, die es möglich machen, auf dem
            Endgerät des Nutzers spezifische, auf den Nutzer bezogene Informationen zu speichern, während er
            die Website nutzt. Cookies ermöglichen es, insbesondere Nutzungshäufigkeit und Nutzeranzahl der
            Seiten zu ermitteln, Verhaltensweisen der Seitennutzung zu analysieren, aber auch unser Angebot
            kundenfreundlicher zu gestalten. Cookies bleiben über das Ende einer Browser-Sitzung gespeichert
            und können bei einem erneuten Seitenbesuch wieder aufgerufen werden. Wenn Sie das nicht
            wünschen, sollten Sie Ihren Internetbrowser so einstellen, dass er die Annahme von Cookies
            verweigert.
            Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des Onlinemarketing eingesetzten
            Cookies kann bei einer Vielzahl der Dienste, vor allem im Fall des Trackings, über die
            US-amerikanische Seite http://www.aboutads.info/choices/ oder die EU-Seite
            http://www.youronlinechoices.com/ erklärt werden. Des Weiteren kann die Speicherung von Cookies
            mittels deren Abschaltung in den Einstellungen des Browsers erreicht werden. Bitte beachten Sie,
            dass dann gegebenenfalls nicht alle Funktionen dieses Onlineangebotes genutzt werden können.</Content>


        <UnderSectionTitle>Datenschutzerklärung für SSL-/TLS-Verschlüsselung</UnderSectionTitle>
        <Content> Diese Website nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher
            Inhalte, wie zum Beispiel der Anfragen, die Sie an uns als Seitenbetreiber senden, eine
            SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die
            Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in
            Ihrer Browserzeile.
            Wenn die SSL bzw. TLS Verschlüsselung aktiviert ist, können die Daten, die Sie an uns
            übermitteln, nicht von Dritten mitgelesen werden.</Content>


        <UnderSectionTitle>Dienste von Dritten</UnderSectionTitle>
        <Content>Diese Website verwenden allenfalls Google Maps für das Einbetten von Karten, Google
            Invisible reCAPTCHA für den Schutz gegen Bots und Spam sowie YouTube für das Einbetten
            von Videos.
            Diese Dienste der amerikanischen Google LLC verwenden unter anderem Cookies und
            infolgedessen werden Daten an Google in den USA übertragen, wobei wir davon ausgehen,
            dass in diesem Rahmen kein personenbezogenes Tracking allein durch die Nutzung unserer
            Website stattfindet.
            Google hat sich verpflichtet, einen angemessenen Datenschutz gemäss dem
            amerikanisch-europäischen und dem amerikanisch-schweizerischen Privacy Shield zu
            gewährleisten.
            Weitere Informationen finden sich in der Datenschutzerklärung von Google.</Content>


        <UnderSectionTitle>Datenschutzerklärung für Kontaktformular</UnderSectionTitle>
        <Content>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
            dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
            Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</Content>


        <UnderSectionTitle>Datenschutzerklärung für Newsletterdaten</UnderSectionTitle>
        <Content> Wenn Sie den auf dieser Website angebotenen Newsletter beziehen möchten,
            benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die
            Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind
            und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden
            nicht erhoben. Diese Daten verwenden wir ausschliesslich für den Versand der
            angeforderten Informationen und geben sie nicht an Dritte weiter.
            Die erteilte Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie
            deren Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen, etwa
            über den «Austragen-Link» im Newsletter.</Content>


        <UnderSectionTitle>Datenschutzerklärung für Google Analytics</UnderSectionTitle>
        <Content> Diese Website benutzt Google Analytics, einen Webanalysedienst der Google
            Ireland Limited. Wenn der Verantwortliche für die Datenverarbeitung auf
            dieser Website ausserhalb des Europäischen Wirtschaftsraumes oder der
            Schweiz sitzt, dann erfolgt die Google Analytics Datenverarbeitung durch
            Google LLC. Google LLC und Google Ireland Limited werden nachfolgend
            «Google» genannt.
            Über die gewonnenen Statistiken können wir unser Angebot verbessern und für
            Sie als Nutzer interessanter ausgestalten. Diese Website verwendet Google
            Analytics zudem für eine geräteübergreifende Analyse von Besucherströmen,
            die über eine User-ID durchgeführt wird. Sofern Sie über ein
            Google-Benutzerkonto verfügen, können Sie in den dortigen Einstellungen
            unter «Meine Daten», «persönliche Daten» die geräteübergreifende Analyse
            Ihrer Nutzung deaktivieren.
            Rechtsgrundlage für die Nutzung von Google Analytics ist Art. 6 Abs. 1 S. 1
            lit. f DS-GVO. Die im Rahmen von Google Analytics von Ihrem Browser
            übermittelte IP-Adresse wird nicht mit anderen Daten von Google
            zusammengeführt. Wir weisen Sie darauf hin, dass auf dieser Website Google
            Analytics um den Code «_anonymizeIp();» erweitert wurde, um eine
            anonymisierte Erfassung von IP-Adressen zu gewährleisten. Dadurch werden
            IP-Adressen gekürzt weiterverarbeitet, eine Personenbeziehbarkeit kann damit
            ausgeschlossen werden. Soweit den über Sie erhobenen Daten ein Personenbezug
            zukommt, wird dieser also sofort ausgeschlossen und die personenbezogenen
            Daten damit umgehend gelöscht.
            Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google
            in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser
            Website wird Google diese Informationen benutzen, um Ihre Nutzung der
            Website auszuwerten, um Reports über die Websitenaktivitäten
            zusammenzustellen und um weitere mit der Websitennutzung und der
            Internetnutzung verbundene Dienstleistungen gegenüber dem Websitenbetreiber
            zu erbringen. Für die Ausnahmefälle, in denen personenbezogene Daten in die
            USA übertragen werden, hat sich Google dem EU-US Privacy Shield unterworfen,
            https://www.privacyshield.gov/EU-US-Framework.
            Google Analytics verwendet Cookies. Die durch den Cookie erzeugten
            Informationen über Ihre Benutzung dieser Website werden in der Regel an
            einen Server von Google in den USA übertragen und dort gespeichert. Sie
            können die Speicherung der Cookies durch eine entsprechende Einstellung
            Ihrer Browser-Software verhindern; wir weisen Sie jedoch darauf hin, dass
            Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website
            vollumfänglich werden nutzen können. Sie können darüber hinaus die Erfassung
            der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen
            Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten
            durch Google verhindern, indem sie das unter dem folgenden Link verfügbare
            Browser-Plugin herunterladen und installieren: Google Analytics
            deaktivieren.
            Ausserdem können Sie die Nutzung von Google Analytics auch verhindern, indem
            sie auf diesen Link klicken: Google Analytics deaktivieren. Hierdurch wird
            ein sog. opt-out Cookie auf ihrem Datenträger gespeichert, der die
            Verarbeitung personenbezogener Daten durch Google Analytics verhindert.
            Bitte beachten Sie, dass bei einem Löschen sämtlicher Cookies auf Ihrem
            Endgerät auch diese Opt-out-Cookies gelöscht werden, d.h., dass Sie erneut
            die Opt-out-Cookies setzen müssen, wenn Sie weiterhin diese Form der
            Datenerhebung verhindern wollen. Die Opt-out-Cookies sind pro Browser und
            Rechner/Endgerät gesetzt und müssen daher für jeden Browser, Rechner oder
            anderes Endgerät gesondert aktiviert werden.</Content>


        <UnderSectionTitle>Datenschutzerklärung für Google Ads</UnderSectionTitle>
        <Content> Diese Website nutzt das Online-Marketing-Tool Google Ads von Google
            («Google Ads»). Google Ads setzt Cookies ein, um für die Nutzer
            relevante Anzeigen zu schalten, die Berichte zur Kampagnenleistung zu
            verbessern oder um zu vermeiden, dass ein Nutzer die gleichen Anzeigen
            mehrmals sieht. Über eine Cookie-ID erfasst Google, welche Anzeigen in
            welchem Browser geschaltet werden und kann so verhindern, dass diese
            mehrfach angezeigt werden. Darüber hinaus kann Google Ads mithilfe von
            Cookie-IDs sog. Conversions erfassen, die Bezug zu Anzeigenanfragen
            haben. Das ist etwa der Fall, wenn ein Nutzer eine Google Ads-Anzeige
            sieht und später mit demselben Browser die Website des Werbetreibenden
            aufruft und dort etwas kauft. Laut Google enthalten Google Ads-Cookies
            keine personenbezogenen Informationen.
            Aufgrund der eingesetzten Marketing-Tools baut Ihr Browser automatisch
            eine direkte Verbindung mit dem Server von Google auf. Durch die
            Einbindung von Google Ads erhält Google die Information, dass Sie den
            entsprechenden Teil unseres Internetauftritts aufgerufen oder eine
            Anzeige von uns angeklickt haben. Sofern Sie bei einem Dienst von Google
            registriert sind, kann Google den Besuch Ihrem Account zuordnen. Selbst
            wenn Sie nicht bei Google registriert sind bzw. sich nicht eingeloggt
            haben, besteht die Möglichkeit, dass Google Ihre IP-Adresse in Erfahrung
            bringt und speichert.</Content>
        <Content>Sie können die Teilnahme an diesem Tracking-Verfahren auf verschiedene
            Weise verhindern:</Content>
        <Content> - durch eine entsprechende Einstellung Ihrer Browser-Software,
            insbesondere führt die Unterdrückung von Drittcookies dazu, dass Sie
            keine Anzeigen von Drittanbietern erhalten;</Content>
        <Content> - durch Deaktivierung der Cookies für Conversion-Tracking, indem Sie
            Ihren Browser so einstellen, dass Cookies von der Domain
            «www.googleadservices.com» blockiert werden,
            https://adssettings.google.com, wobei diese Einstellung gelöscht
            wird, wenn Sie Ihre Cookies löschen;</Content>
        <Content> - durch Deaktivierung der interessenbezogenen Anzeigen der Anbieter,
            die Teil der Selbstregulierungs-Kampagne «About Ads» sind, über den
            Link https://www.aboutads.info/choices, wobei diese Einstellung
            gelöscht wird, wenn Sie Ihre Cookies löschen;</Content>
        <Content>- durch dauerhafte Deaktivierung in Ihren Browsern Firefox,
            Internetexplorer oder Google Chrome unter dem Link
            https://www.google.com/settings/ads/plugin. Wir weisen Sie darauf
            hin, dass Sie in diesem Fall gegebenenfalls nicht alle Funktionen
            dieses Angebots vollumfänglich nutzen können.</Content>
        <Content> Rechtsgrundlage für die Verarbeitung Ihrer Daten ist eine
            Interessenabwägung, wonach der vorstehend geschilderten
            Verarbeitung Ihrer personenbezogenen Daten keine überwiegenden
            gegenteiligen Interessen Ihrerseits entgegenstehen (Art. 6 Abs.
            1 S. 1 lit. f DSGVO). Weitere Informationen zu Google Ads von
            Google erhalten Sie unter
            https://ads.google.com/intl/de_DE/home/, sowie zum Datenschutz
            bei Google allgemein:
            https://www.google.de/intl/de/policies/privacy. Alternativ
            können Sie die Website der Network Advertising Initiative (NAI)
            unter https://www.networkadvertising.org besuchen.</Content>
        <UnderSectionTitle>Datenschutzerklärung für die Nutzung von Google Web
            Fonts</UnderSectionTitle>
        <Content>Diese Website nutzt zur einheitlichen Darstellung von
            Schriftarten so genannte Web Fonts, die von Google
            bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr
            Browser die benötigten Web Fonts in ihren Browsercache, um
            Texte und Schriftarten korrekt anzuzeigen. Wenn Ihr Browser
            Web Fonts nicht unterstützt, wird eine Standardschrift von
            Ihrem Computer genutzt.
            Weitere Informationen zu Google Web Fonts finden Sie unter
            https://developers.google.com/fonts/faq und in der
            Datenschutzerklärung von Google:
            https://www.google.com/policies/privacy/</Content>
        <UnderSectionTitle>Datenschutzerklärung für Twitter</UnderSectionTitle>
        <Content>Diese Website verwendet Funktionen von Twitter, Inc.,
            1355 Market St, Suite 900, San Francisco, CA 94103, USA.
            Bei Aufruf unserer Seiten mit Twitter-Plug-Ins wird eine
            Verbindung zwischen Ihrem Browser und den Servern von
            Twitter aufgebaut. Dabei werden bereits Daten an Twitter
            übertragen. Besitzen Sie einen Twitter-Account, können
            diese Daten damit verknüpft werden. Wenn Sie keine
            Zuordnung dieser Daten zu Ihrem Twitter-Account
            wünschen, loggen Sie sich bitte vor dem Besuch unserer
            Seite bei Twitter aus. Interaktionen, insbesondere das
            Anklicken eines „Re-Tweet“-Buttons werden ebenfalls an
            Twitter weitergegeben. Mehr erfahren Sie unter
            https://twitter.com/privacy.</Content>
        <UnderSectionTitle>Datenschutzerklärung für Instagram</UnderSectionTitle>
        <Content>Auf unserer Website sind Funktionen des Dienstes
            Instagram eingebunden. Diese Funktionen werden
            angeboten durch die Instagram Inc., 1601 Willow
            Road, Menlo Park, CA, 94025, USA integriert. Wenn
            Sie in Ihrem Instagram-Account eingeloggt sind
            können Sie durch Anklicken des Instagram-Buttons die
            Inhalte unserer Seiten mit Ihrem Instagram-Profil
            verlinken. Dadurch kann Instagram den Besuch unserer
            Seiten Ihrem Benutzerkonto zuordnen. Wir weisen
            darauf hin, dass wir als Anbieter der Seiten keine
            Kenntnis vom Inhalt der übermittelten Daten sowie
            deren Nutzung durch Instagram erhalten.
            Weitere Informationen hierzu finden Sie in der
            Datenschutzerklärung von Instagram:
            http://instagram.com/about/legal/privacy/</Content>
        <UnderSectionTitle>Änderungen</UnderSectionTitle>
        <Content>Wir können diese Datenschutzerklärung jederzeit
            ohne Vorankündigung anpassen. Es gilt die
            jeweils aktuelle, auf unserer Website
            publizierte Fassung. Soweit die
            Datenschutzerklärung Teil einer Vereinbarung mit
            Ihnen ist, werden wir Sie im Falle einer
            Aktualisierung über die Änderung per E-Mail oder
            auf andere geeignete Weise informieren.</Content>
        <UnderSectionTitle>Fragen an den Datenschutzbeauftragten</UnderSectionTitle>
        <Content>Wenn Sie Fragen zum Datenschutz haben,
            schreiben Sie uns bitte eine E-Mail oder
            wenden Sie sich direkt an die für den
            Datenschutz zu Beginn der
            Datenschutzerklärung aufgeführten,
            verantwortlichen Person in unserer
            Organisation.</Content>
        <Content>Glattbrugg, 01.11.2022</Content>
        <Content> Quelle: <a
            href="https://www.swissanwalt.ch/">SwissAnwalt</a></Content>


    </SectionContainer>
)

export default DataPrivacy