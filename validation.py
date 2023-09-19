from lxml import etree


xml_tree = etree.parse("jokesdisplay.xml")


xsl_transform = etree.XSLT(etree.parse("jokesdisplay.xslt"))

html_tree = xsl_transform(xml_tree)


xmlschema = etree.XMLSchema(etree.parse("jokesdisplay.xsd"))
if xmlschema.validate(xml_tree):
    print("XML is valid against XSD.")
else:
    print("XML is not valid against XSD.")
    exit(1)


with open("jokesdisplay.html", "wb") as output_file:
    output_file.write(etree.tostring(html_tree, pretty_print=True))