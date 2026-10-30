const ranks = [
{
    "rank_code":"E1",
    "rank":"ASN",
    "rank_name":"Apprentice Seaman",
    "branchOfService":"Philippine Navy",
    "brsvc":"PN"
},
{
    "rank_code":"E2",
    "rank":"SN2",
    "rank_name":"Seaman 2nd Class",
    "branchOfService":"Philippine Navy",
    "brsvc":"PN"
},
{
    "rank_code":"E3",
    "rank":"SN1",
    "rank_name":"Seaman 1st Class",
    "branchOfService":"Philippine Navy",
    "brsvc":"PN"
},
{
    "rank_code":"E4",
    "rank":"PO3",
    "rank_name":"Petty Officer 3rd Class",
    "branchOfService":"Philippine Navy",
    "brsvc":"PN"
},
{
    "rank_code":"E5",
    "rank":"PO2",
    "rank_name":"Petty Officer 2nd Class",
    "branchOfService":"Philippine Navy",
    "brsvc":"PN"
},
{
    "rank_code":"E6",
    "rank":"PO1",
    "rank_name":"Petty Officer 1st Class",
    "branchOfService":"Philippine Navy",
    "brsvc":"PN"
},
{
    "rank_code":"E7",
    "rank":"CPO",
    "rank_name":"Chief Petty Officer",
    "branchOfService":"Philippine Navy",
    "brsvc":"PN"
},
{
    "rank_code":"E8",
    "rank":"SMSGT",
    "rank_name":"Senior Master Sergeant",
    "branchOfService":"Philippine Navy",
    "brsvc":"PN"
},
{
    "rank_code":"E9",
    "rank":"CMSGT",
    "rank_name":"Chief Master Sergeant",
    "branchOfService":"Philippine Navy",
    "brsvc":"PN"
},
{
    "rank_code":"O1",
    "rank":"ENS",
    "rank_name":"Ensign",
    "branchOfService":"Philippine Navy",
    "brsvc":"PN"
},
{
    "rank_code":"O2",
    "rank":"LTJG",
    "rank_name":"Lieutenant Junior Grade",
    "branchOfService":"Philippine Navy",
    "brsvc":"PN"
},
{
    "rank_code":"O3",
    "rank":"LTSG",
    "rank_name":"Lieutenant Senior Grade",
    "branchOfService":"Philippine Navy",
    "brsvc":"PN"
},
{
    "rank_code":"O4",
    "rank":"LCDR",
    "rank_name":"Lieutenant Commander",
    "branchOfService":"Philippine Navy",
    "brsvc":"PN"
},
{
    "rank_code":"O5",
    "rank":"CMDR",
    "rank_name":"Commander",
    "branchOfService":"Philippine Navy",
    "brsvc":"PN"
},
{
    "rank_code":"O6",
    "rank":"CAPT",
    "rank_name":"Captain",
    "branchOfService":"Philippine Navy",
    "brsvc":"PN"
},
{
    "rank_code":"O7",
    "rank":"COMMO",
    "rank_name":"Commodore",
    "branchOfService":"Philippine Navy",
    "brsvc":"PN"
},
{
    "rank_code":"O8",
    "rank":"RADM",
    "rank_name":"Rear Admiral",
    "branchOfService":"Philippine Navy",
    "brsvc":"PN"
},
{
    "rank_code":"O9",
    "rank":"VADM",
    "rank_name":"Vice Admiral",
    "branchOfService":"Philippine Navy",
    "brsvc":"PN"
},
{
    "rank_code":"O10",
    "rank":"ADM",
    "rank_name":"Admiral",
    "branchOfService":"Philippine Navy",
    "brsvc":"PN"
},
{
    "rank_code":"E1",
    "rank":"PVT",
    "rank_name":"Private",
    "branchOfService":"Philippine Army",
    "brsvc":"PA"
},
{
    "rank_code":"E2",
    "rank":"PFC",
    "rank_name":"Private First Class",
    "branchOfService":"Philippine Army",
    "brsvc":"PA"
},
{
    "rank_code":"E3",
    "rank":"CPL",
    "rank_name":"Corporal",
    "branchOfService":"Philippine Army",
    "brsvc":"PA"
},
{
    "rank_code":"E4",
    "rank":"SGT",
    "rank_name":"Sergeant",
    "branchOfService":"Philippine Army",
    "brsvc":"PA"
},
{
    "rank_code":"E5",
    "rank":"SSGT",
    "rank_name":"Staff Sergeant",
    "branchOfService":"Philippine Army",
    "brsvc":"PA"
},
{
    "rank_code":"E6",
    "rank":"TSGT",
    "rank_name":"Technical Sergeant",
    "branchOfService":"Philippine Army",
    "brsvc":"PA"
},
{
    "rank_code":"E7",
    "rank":"MSGT",
    "rank_name":"Master Sergeant",
    "branchOfService":"Philippine Army",
    "brsvc":"PA"
},
{
    "rank_code":"E8",
    "rank":"SMSGT",
    "rank_name":"Senior Master Sergeant",
    "branchOfService":"Philippine Army",
    "brsvc":"PA"
},
{
    "rank_code":"E9",
    "rank":"CMSGT",
    "rank_name":"Chief Master Sergeant",
    "branchOfService":"Philippine Army",
    "brsvc":"PA"
},
{
    "rank_code":"O1",
    "rank":"2LT",
    "rank_name":"Second Lieutenant",
    "branchOfService":"Philippine Army",
    "brsvc":"PA"
},
{
    "rank_code":"O2",
    "rank":"1LT",
    "rank_name":"First Lieutenant",
    "branchOfService":"Philippine Army",
    "brsvc":"PA"
},
{
    "rank_code":"O3",
    "rank":"CPT",
    "rank_name":"Captain",
    "branchOfService":"Philippine Army",
    "brsvc":"PA"
},
{
    "rank_code":"O4",
    "rank":"MAJ",
    "rank_name":"Major",
    "branchOfService":"Philippine Army",
    "brsvc":"PA"
},
{
    "rank_code":"O5",
    "rank":"LTC",
    "rank_name":"Lieutenant Colonel",
    "branchOfService":"Philippine Army",
    "brsvc":"PA"
},
{
    "rank_code":"O6",
    "rank":"COL",
    "rank_name":"Colonel",
    "branchOfService":"Philippine Army",
    "brsvc":"PA"
},
{
    "rank_code":"O7",
    "rank":"BGEN",
    "rank_name":"Brigadier General",
    "branchOfService":"Philippine Army",
    "brsvc":"PA"
},
{
    "rank_code":"O8",
    "rank":"MGEN",
    "rank_name":"Major General",
    "branchOfService":"Philippine Army",
    "brsvc":"PA"
},
{
    "rank_code":"O9",
    "rank":"LTGEN",
    "rank_name":"Lieutenant General",
    "branchOfService":"Philippine Army",
    "brsvc":"PA"
},
{
    "rank_code":"O10",
    "rank":"GEN",
    "rank_name":"General",
    "branchOfService":"Philippine Army",
    "brsvc":"PA"
},
{
    "rank_code":"E1",
    "rank":"PVT",
    "rank_name":"Private",
    "branchOfService":"Philippine Air Force",
    "brsvc":"PAF"
},
{
    "rank_code":"E2",
    "rank":"PFC",
    "rank_name":"Private First Class",
    "branchOfService":"Philippine Air Force",
    "brsvc":"PAF"
},
{
    "rank_code":"E3",
    "rank":"CPL",
    "rank_name":"Corporal",
    "branchOfService":"Philippine Air Force",
    "brsvc":"PAF"
},
{
    "rank_code":"E4",
    "rank":"SGT",
    "rank_name":"Sergeant",
    "branchOfService":"Philippine Air Force",
    "brsvc":"PAF"
},
{
    "rank_code":"E5",
    "rank":"SSGT",
    "rank_name":"Staff Sergeant",
    "branchOfService":"Philippine Air Force",
    "brsvc":"PAF"
},
{
    "rank_code":"E6",
    "rank":"TSGT",
    "rank_name":"Technical Sergeant",
    "branchOfService":"Philippine Air Force",
    "brsvc":"PAF"
},
{
    "rank_code":"E7",
    "rank":"MSGT",
    "rank_name":"Master Sergeant",
    "branchOfService":"Philippine Air Force",
    "brsvc":"PAF"
},
{
    "rank_code":"E8",
    "rank":"SMSGT",
    "rank_name":"Senior Master Sergeant",
    "branchOfService":"Philippine Air Force",
    "brsvc":"PAF"
},
{
    "rank_code":"E9",
    "rank":"CMSGT",
    "rank_name":"Chief Master Sergeant",
    "branchOfService":"Philippine Air Force",
    "brsvc":"PAF"
},
{
    "rank_code":"O1",
    "rank":"2LT",
    "rank_name":"Second Lieutenant",
    "branchOfService":"Philippine Air Force",
    "brsvc":"PAF"
},
{
    "rank_code":"O2",
    "rank":"1LT",
    "rank_name":"First Lieutenant",
    "branchOfService":"Philippine Air Force",
    "brsvc":"PAF"
},
{
    "rank_code":"O3",
    "rank":"CPT",
    "rank_name":"Captain",
    "branchOfService":"Philippine Air Force",
    "brsvc":"PAF"
},
{
    "rank_code":"O4",
    "rank":"MAJ",
    "rank_name":"Major",
    "branchOfService":"Philippine Air Force",
    "brsvc":"PAF"
},
{
    "rank_code":"O5",
    "rank":"LTC",
    "rank_name":"Lieutenant Colonel",
    "branchOfService":"Philippine Air Force",
    "brsvc":"PAF"
},
{
    "rank_code":"O6",
    "rank":"COL",
    "rank_name":"Colonel",
    "branchOfService":"Philippine Air Force",
    "brsvc":"PAF"
},
{
    "rank_code":"O7",
    "rank":"BGEN",
    "rank_name":"Brigadier General",
    "branchOfService":"Philippine Air Force",
    "brsvc":"PAF"
},
{
    "rank_code":"O8",
    "rank":"MGEN",
    "rank_name":"Major General",
    "branchOfService":"Philippine Air Force",
    "brsvc":"PAF"
},
{
    "rank_code":"O9",
    "rank":"LTGEN",
    "rank_name":"Lieutenant General",
    "branchOfService":"Philippine Air Force",
    "brsvc":"PAF"
},
{
    "rank_code":"O10",
    "rank":"GEN",
    "rank_name":"General",
    "branchOfService":"Philippine Air Force",
    "brsvc":"PAF"
},
{
    "rank_code":"E1",
    "rank":"PVT",
    "rank_name":"Private",
    "branchOfService":"Philippine Marine",
    "brsvc":"PN(M)"
},
{
    "rank_code":"E2",
    "rank":"PFC",
    "rank_name":"Private First Class",
    "branchOfService":"Philippine Marine",
    "brsvc":"PN(M)"
},
{
    "rank_code":"E3",
    "rank":"CPL",
    "rank_name":"Corporal",
    "branchOfService":"Philippine Marine",
    "brsvc":"PN(M)"
},
{
    "rank_code":"E4",
    "rank":"SGT",
    "rank_name":"Sergeant",
    "branchOfService":"Philippine Marine",
    "brsvc":"PN(M)"
},
{
    "rank_code":"E5",
    "rank":"SSGT",
    "rank_name":"Staff Sergeant",
    "branchOfService":"Philippine Marine",
    "brsvc":"PN(M)"
},
{
    "rank_code":"E6",
    "rank":"TSGT",
    "rank_name":"Technical Sergeant",
    "branchOfService":"Philippine Marine",
    "brsvc":"PN(M)"
},
{
    "rank_code":"E7",
    "rank":"MSGT",
    "rank_name":"Master Sergeant",
    "branchOfService":"Philippine Marine",
    "brsvc":"PN(M)"
},
{
    "rank_code":"E8",
    "rank":"SMSGT",
    "rank_name":"Senior Master Sergeant",
    "branchOfService":"Philippine Marine",
    "brsvc":"PN(M)"
},
{
    "rank_code":"E9",
    "rank":"CMSGT",
    "rank_name":"Chief Master Sergeant",
    "branchOfService":"Philippine Marine",
    "brsvc":"PN(M)"
},
{
    "rank_code":"O1",
    "rank":"2LT",
    "rank_name":"Second Lieutenant",
    "branchOfService":"Philippine Marine",
    "brsvc":"PN(M)"
},
{
    "rank_code":"O2",
    "rank":"1LT",
    "rank_name":"First Lieutenant",
    "branchOfService":"Philippine Marine",
    "brsvc":"PN(M)"
},
{
    "rank_code":"O3",
    "rank":"CPT",
    "rank_name":"Captain",
    "branchOfService":"Philippine Marine",
    "brsvc":"PN(M)"
},
{
    "rank_code":"O4",
    "rank":"MAJ",
    "rank_name":"Major",
    "branchOfService":"Philippine Marine",
    "brsvc":"PN(M)"
},
{
    "rank_code":"O5",
    "rank":"LTC",
    "rank_name":"Lieutenant Colonel",
    "branchOfService":"Philippine Marine",
    "brsvc":"PN(M)"
},
{
    "rank_code":"O6",
    "rank":"COL",
    "rank_name":"Colonel",
    "branchOfService":"Philippine Marine",
    "brsvc":"PN(M)"
},
{
    "rank_code":"O7",
    "rank":"BGEN",
    "rank_name":"Brigadier General",
    "branchOfService":"Philippine Marine",
    "brsvc":"PN(M)"
},
{
    "rank_code":"O8",
    "rank":"MGEN",
    "rank_name":"Major General",
    "branchOfService":"Philippine Marine",
    "brsvc":"PN(M)"
},
{
    "rank_code":"O9",
    "rank":"LTGEN",
    "rank_name":"Lieutenant General",
    "branchOfService":"Philippine Marine",
    "brsvc":"PN(M)"
},
{
    "rank_code":"O10",
    "rank":"GEN",
    "rank_name":"General",
    "branchOfService":"Philippine Marine",
    "brsvc":"PN(M)"
},
{
    "rank_code":"E1",
    "rank":"PVT",
    "rank_name":"Private",
    "branchOfService":"Technical & Administrative Service",
    "brsvc":"TAS"
},
{
    "rank_code":"E2",
    "rank":"PFC",
    "rank_name":"Private First Class",
    "branchOfService":"Technical & Administrative Service",
    "brsvc":"TAS"
},
{
    "rank_code":"E3",
    "rank":"CPL",
    "rank_name":"Corporal",
    "branchOfService":"Technical & Administrative Service",
    "brsvc":"TAS"
},
{
    "rank_code":"E4",
    "rank":"SGT",
    "rank_name":"Sergeant",
    "branchOfService":"Technical & Administrative Service",
    "brsvc":"TAS"
},
{
    "rank_code":"E5",
    "rank":"SSGT",
    "rank_name":"Staff Sergeant",
    "branchOfService":"Technical & Administrative Service",
    "brsvc":"TAS"
},
{
    "rank_code":"E6",
    "rank":"TSGT",
    "rank_name":"Technical Sergeant",
    "branchOfService":"Technical & Administrative Service",
    "brsvc":"TAS"
},
{
    "rank_code":"E7",
    "rank":"MSGT",
    "rank_name":"Master Sergeant",
    "branchOfService":"Technical & Administrative Service",
    "brsvc":"TAS"
},
{
    "rank_code":"E8",
    "rank":"SMSGT",
    "rank_name":"Senior Master Sergeant",
    "branchOfService":"Technical & Administrative Service",
    "brsvc":"TAS"
},
{
    "rank_code":"E9",
    "rank":"CMSGT",
    "rank_name":"Chief Master Sergeant",
    "branchOfService":"Technical & Administrative Service",
    "brsvc":"TAS"
},
{
    "rank_code":"O1",
    "rank":"2LT",
    "rank_name":"Second Lieutenant",
    "branchOfService":"Technical & Administrative Service",
    "brsvc":"TAS"
},
{
    "rank_code":"O2",
    "rank":"1LT",
    "rank_name":"First Lieutenant",
    "branchOfService":"Technical & Administrative Service",
    "brsvc":"TAS"
},
{
    "rank_code":"O3",
    "rank":"CPT",
    "rank_name":"Captain",
    "branchOfService":"Technical & Administrative Service",
    "brsvc":"TAS"
},
{
    "rank_code":"O4",
    "rank":"MAJ",
    "rank_name":"Major",
    "branchOfService":"Technical & Administrative Service",
    "brsvc":"TAS"
},
{
    "rank_code":"O5",
    "rank":"LTC",
    "rank_name":"Lieutenant Colonel",
    "branchOfService":"Technical & Administrative Service",
    "brsvc":"TAS"
},
{
    "rank_code":"O6",
    "rank":"COL",
    "rank_name":"Colonel",
    "branchOfService":"Technical & Administrative Service",
    "brsvc":"TAS"
},
{
    "rank_code":"O7",
    "rank":"BGEN",
    "rank_name":"Brigadier General",
    "branchOfService":"Technical & Administrative Service",
    "brsvc":"TAS"
},
{
    "rank_code":"O8",
    "rank":"MGEN",
    "rank_name":"Major General",
    "branchOfService":"Technical & Administrative Service",
    "brsvc":"TAS"
},
{
    "rank_code":"O9",
    "rank":"LTGEN",
    "rank_name":"Lieutenant General",
    "branchOfService":"Technical & Administrative Service",
    "brsvc":"TAS"
},
{
    "rank_code":"O10",
    "rank":"GEN",
    "rank_name":"General",
    "branchOfService":"Technical & Administrative Service",
    "brsvc":"TAS"
}
];

export default ranks;