const Products = [
    {
      id : 1,
      Name: "Air Jordan 1 HIGH OG 'Black Toe'",
      Price: 6600,
      Description: "AJ1 ส่วนใหญ่มีโลโก้ Wings ที่ส่วนหุ้มข้อ แต่ไม่ใช่กับ AJ1 รุ่นนี้ เพราะนี่คือรุ่นต้นแบบของรองเท้าระดับไอคอน",
      image: "https://static.nike.com/a/images/w_1280,q_auto,f_auto/4caf3277-8878-4559-aa37-eef8c708a39b/%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B8%A7-air-jordan-1-high-og-black-toe-dz5485-106.jpg",
      tag : "men"
    },
    {
      id : 2,
      Name: "Air Jordan 4 RM",
      Price: 5400,
      Description: "สนีกเกอร์คู่นี้นำ AJ4 ที่ใครเห็นปุ๊บก็รู้ปั๊บมาปรับโฉมใหม่เพื่อไลฟ์สไตล์ที่ต้องเดินทางอยู่เสมอ",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d5b850ba-91ea-4652-8631-f4277ac3e67e/AIR+JORDAN+4+RM.png",
      tag : "men"
    },
    {
      id : 3,
      Name: "Kobe 9 Elite Protro 'Masterpiece' Black and Metallic Silver",
      Price: 4300,
      Description: "การกลับมาของ Kobe หลังเอ็นร้อยหวายขาดเป็นแรงบันดาลใจให้เหล่านักบาสรุ่นเก่า รุ่นปัจจุบัน และรุ่นใหม่สู้ต่อไป Kobe IX Protro",
      image: "https://static.nike.com/a/images/w_1280,q_auto,f_auto/e3794a58-1583-44c0-be6c-c352df69c0d2/%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B8%A7-kobe-9-elite-protro-masterpiece-black-and-metallic-silver-fz7335-001.jpg",
      tag : "men"
    },
    {
      id : 4,
      Name: "LeBron NXXT Genisus EP",
      Price: 5700,
      Description: "LeBron NXXT Genisus มาพร้อมตาข่ายน้ำหนักเบาเสริมการรองรับ และระบบลดแรงกระแทก Air Zoom ยืดหยุ่นเพื่อความเร็วตลอดทั้งเกม",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c0969635-faea-44fc-915e-ced3c6b08085/LBJ+NXXT+GENISUS+EP.png",
      tag : "men"
    },
    {
      id : 5,
      Name: "Giannis Freak 6 EP",
      Price: 5400,
      Description: "Giannis ต้องการรองเท้าเพื่อครองเกมยุคใหม่ที่ไม่มีตำแหน่งตายตัว นั่นคือเหตุผลที่เราอัพเกรดรูปแบบการยึดเกาะของ Giannis Freak 6 พื้นรองเท้าชั้นนอกลายก้างปลาช่วยให้เขาหยุดอย่างกะทันหันเพื่อพลิกเกมได้ดั่งใจ",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ce2830e9-6aa1-4157-8cb8-6d3c31203280/GIANNIS+FREAK+6+NRG+EP.png",
      tag : "men"
    },
    {
      id : 6,
      Name: "Ja 2 'Heart Eyes' EP",
      Price: 5200,
      Description: "Ja ทุ่มเทหัวใจให้กับเกมที่เขารักมากที่สุด และเขาก็ได้รับสิ่งนั้นตอบแทนกลับมา Ja 2 รุ่นพิเศษนี้ให้ความรู้สึกแบบจัดเต็ม โดยนำแรงบันดาลใจมาจากลูกกวาดวันวาเลนไทน์อันโปรดของ Ja ซึ่งตราตรึงอยู่ในใจของดาวเด่นคนนี้",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/409ba3ac-6e26-41e0-9806-6d46fdc496fd/JA+2+HEART+EYES+EP.png",
      tag : "men"
    },
    {
      id : 7,
      Name: "Nike Zoom Vomero 5",
      Price: 6000,
      Description: "เปิดเส้นทางใหม่ให้ตัวเองด้วย Vomero 5 คู่โปรดที่มีความซับซ้อน มีมิติ และแต่งสไตล์ได้ง่าย ดีไซน์มีเลเยอร์แบบจัดเต็มรวมถึงผ้า หนังสังเคราะห์ และส่วนเน้นพลาสติกประกอบเข้าด้วยกันอยู่ในหนึ่งในสนีกเกอร์ที่สดใหม่ที่สุดของซีซั่น",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/caab5214-9db2-4e9f-b166-6f5c8ee13c13/NIKE+ZOOM+VOMERO+5+NBHD.png",
      tag : "men"
    },
    {
      id : 8,
      Name: "Nike Killshot 2 Leather",
      Price: 3600,
      Description: "Killshot 2 ได้แรงบันดาลใจจากรองเท้าเทนนิสรุ่นออริจินัล พร้อมปรับโฉมดีไซน์คลาสสิกด้วยหนังมีเท็กซ์เจอร์หลากหลายเพื่อลุคที่ดูสดใหม่",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c8ee0e57-f546-45dd-8f44-199439624435/KILLSHOT+2+LEATHER.png",
      tag : "men"
    },
    {
      id : 9,
      Name: "Nike Air Max 1 '86 OG G",
      Price: 6000,
      Description: "ตำนานแห่งสตรีทแวร์มาเยือนสนามกอล์ฟแล้ว Air Max 1 '86 OG G คู่นี้โดดเด่นด้วยดีไซน์ 4 หน้าต่างที่ใช้แอบดูส่วน Max Air ที่อยู่ข้างใต้ได้ รองเท้าคู่นี้จะให้ความเท่ ความมั่นใจ และความสบายในการออกรอบแบบที่จับต้องได้",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a9e02dd4-062b-4625-8166-bb066f68bc14/NIKE+AIR+MAX+1+%2786+OG+G.png",
      tag : "men"
    },
    {
      id : 10,
      Name: "Nike SB Heritage Vulc",
      Price: 2300,
      Description: "Nike SB Heritage Vulc ผลิตจากหนังกลับและผ้าใบ พร้อมยกย่องให้กับรองเท้าสเก็ตบอร์ดสุดคลาสสิก ดีไซน์โมเดิร์นผสานระบบลดแรงกระแทกจากโฟมเข้ากับยางยืดหยุ่นเพื่อประสิทธิภาพที่คุณวางใจได้",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8ae0f68d-4331-4f1d-9b80-763adbe2ab3c/NIKE+SB+HERITAGE+VULC.png",
      tag : "men"
    },
    {
      id : 11,
      Name: "Nike V2K Run",
      Price: 4700,
      Description: "จะมุ่งสู่อนาคต หรือย้อนกลับสู่อดีตดีนะ ไม่สำคัญหรอก เพราะรองเท้าคู่นี้จะนำพาสไตล์ย้อนยุคไปสู่อนาคต V2K ปรับโฉมใหม่ให้กับทุกสิ่งที่คุณรักในรุ่น Vomero ด้วยลุคแบบมีเลเยอร์ที่ถอดแบบมาจากแค็ตตาล็อกสไตล์นักวิ่งช่วงต้นยุค 2000 และความสบายแบบโมเดิร์นสุดๆ",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/39bc4e66-8101-48c3-bdba-db04ce763fcc/W+NIKE+V2K+RUN.png",
      tag : "women"
    },
    {
      id : 12,
      Name: "Air Superfly ผู้หญิง Mystic Red",
      Price: 3700,
      Description: "Superfly ก้าวสู่ศักราชใหม่ของดีไซน์ที่ได้แรงบันดาลใจจากการวิ่ง คู่นี้ออกมาจากคลังของเราพร้อมกับ Air แบบใหม่และสไตล์แบบใหม่ ทรงกว้างบางและรูปแบบพื้นรองเท้าชั้นนอกสื่อถึงต้นกำเนิดดั้งเดิมจากลู่วิ่ง ขณะที่คู่สีแดงล้วนและลวดลายแบบมีเท็กซ์เจอร์ให้ลุคที่อินเทรนด์",
      image: "https://static.nike.com/a/images/w_1280,q_auto,f_auto/1b074bee-5021-4d1c-967b-67bc19b01fa4/%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B8%A7-air-superfly-mystic-red-%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%AB%E0%B8%8D%E0%B8%B4%E0%B8%87-hj8082-601.jpg",
      tag : "women"
    },
    {
      id : 13,
      Name: "Air Superfly ผู้หญิง Metallic Silver and Black",
      Price: 3700,
      Description: "Superfly ก้าวสู่ศักราชใหม่ของดีไซน์ที่ได้แรงบันดาลใจจากการวิ่ง คู่นี้ออกมาจากคลังของเราพร้อมกับ Air แบบใหม่และสไตล์แบบใหม่ ทรงกว้างบางและรูปแบบพื้นรองเท้าชั้นนอกสื่อถึงต้นกำเนิดดั้งเดิมจากลู่วิ่ง ขณะที่คู่สี Metallic Silver และลวดลายแบบมีเท็กซ์เจอร์ให้ลุคที่อินเทรนด์",
      image: "https://static.nike.com/a/images/w_1280,q_auto,f_auto/03b6fcbc-9a7a-4f93-91c3-69d25709b80d/%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%9B%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B8%A7-air-superfly-metallic-silver-and-black-%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%AB%E0%B8%8D%E0%B8%B4%E0%B8%87-ib5824-001.jpg",
      tag : "women"
    },
    {
      id : 14,
      Name: "Nike Air Max Dn Premium",
      Price: 6300,
      Description: "ขอแนะนำเจนใหม่แห่งเทคโนโลยี Air Air Max Dn โดดเด่นด้วยระบบ Dynamic Air ที่มาพร้อมท่อแบบแรงดันคู่เพื่อให้สัมผัสที่ตอบสนองได้ดีในทุกย่างก้าว จึงเกิดเป็นดีไซน์ล้ำอนาคตที่ใส่สบายพอที่จะใส่ได้ตั้งแต่เช้าจรดค่ำ นอกจากนี้ รุ่นพรีเมียมนี้ยังโดดเด่นด้วยผิวเมทัลลิกแบบโมโนโครม สวมรองเท้าแล้วสัมผัสความเหนือจริงได้เลย",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/857a9aa3-70e0-4710-b261-952ddcdc4649/W+AIR+MAX+DN+PRM.png",
      tag : "women"
    },
    {
      id : 15,
      Name: "Nike Pegasus Trail 5",
      Price: 5400,
      Description: "สยายปีกแล้วมาลองดูกันว่าธรรมชาติจะนำคุณไปเจอสิ่งใดขณะวิ่งบนเส้นทางธรรมชาติไปกับ Peg Trail 5 รองเท้าคู่นี้เป็นรองเท้าเปี่ยมประสิทธิภาพ 2 ด้านอย่างแท้จริงที่มุ่งมั่นจะก้าวข้ามเส้นแบ่งระหว่างทางเรียบและทางขรุขระ และในวันนี้มาพร้อมพื้นรองเท้าโฟมชั้นกลางReactX ที่ตอบสนองได้ดีระดับอัลตร้า",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4f73bfc5-b556-471c-9267-498fe0692003/W+NIKE+REACTX+PEGASUS+TRAIL+5.png",
      tag : "women"
    },
    {
      id : 16,
      Name: "Nike Zegama 2",
      Price: 6600,
      Description: "ไต่ขึ้นเขา เดินผ่านป่า สู่จุดสูงสุดของเส้นทางเทรลที่คุณไปถึง Zegama 2 มาพร้อมกับพื้นรองเท้าโฟมชั้นกลาง ZoomX ที่ตอบสนองฉับไวเป็นพิเศษ",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b41b8894-159c-424f-95f9-a7dc65d75d16/W+NIKE+ZOOMX+ZEGAMA+TRAIL+2.png",
      tag : "women"
    },
    {
      id : 17,
      Name: "Nike SB Heritage Vulc",
      Price: 3200,
      Description: "เปิดรับภูมิประเทศแบบเนินเขาด้วย Juniper Trail 3 พื้นรองเท้าชั้นนอก Trail ATC ของเราช่วยให้ทรงตัวได้ดีตลอดเส้นทางเทรล และเรายังทำให้พื้นรองเท้าชั้นกลางและส่วนบนนุ่มขึ้นและยืดหยุ่นมากขึ้นเมื่อเทียบกับรุ่นก่อนๆ",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ea897945-72b7-4cd4-92c1-7f970d882970/W+NIKE+JUNIPER+TRAIL+3.png",
      tag : "women"
    },
    {
      id : 18,
      Name: "Nike SB Dunk Low Pro",
      Price: 4700,
      Description: "วางใจในความคลาสสิกได้เสมอ Dunk Low จับคู่สีคัลเลอร์บล็อคอันเป็นเอกลักษณ์เข้ากับวัสดุระดับพรีเมียมและชั้นบุนุ่มพิเศษ เพื่อความสบายที่ยาวนานแบบพลิกเกม คู่นี้แต่งสไตล์ได้หลากหลายไม่มีที่สิ้นสุด แล้วคุณล่ะจะใส่ Dunk อย่างไร",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e1e5153e-0c3f-45a6-a25c-3b2db635f9a1/NIKE+SB+DUNK+LOW+PRO.png",
      tag : "women"
    },
    {
      id : 19,
      Name: "Nike G.T. Hustle 3 Blueprint EP",
      Price: 6900,
      Description: "G.T. Hustle 3 ช่วยให้คุณพุ่งทะยานได้ในช่วงเวลาคับขัน ระบบลดแรงกระแทก Air Zoom แบบซ้อน 2 ชั้นส่งแรงที่ดีดตัวได้ดี โดยออกแบบเชิงโครงสร้างมาให้มีคุณสมบัติตรงตามความต้องการของนักกีฬาระดับแชมป์",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7293b867-7202-4161-83db-76474e93a240/G.T.+HUSTLE+3+FP+EP.png",
      tag : "women"
    },
    {
      id : 20,
      Name: "Air Jordan 1 Retro High OG 'First in Flight'",
      Price: 7900,
      Description: "AJ1 รุ่นนี้แปลงโฉมซิกเนเจอร์รุ่นแรกของ Mike ด้วยการผสมผสานสีสันที่สดใหม่ โดยมีวัสดุระดับพรีเมียม ระบบลดแรงกระแทกนุ่ม และส่วนหุ้มข้อบุนวมให้การรองรับแบบเต็มร้อยและเฉลิมฉลองให้กับรองเท้าอันเป็นจุดเริ่มต้นของทุกสิ่ง",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b0aecb4c-3e97-4080-a944-dcbd89af7ee7/WMNS+AIR+JORDAN+1+RETRO+HI+OG.png",
      tag : "women"
    }
  ];
  
  export default Products;