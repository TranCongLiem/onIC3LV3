const quizData = [
    {
        id: 1,
        type: "single_choice",
        question: "Trong hình ảnh sau đây, thông tin nào là thông tin hệ thống (System information) để xác định số kiểu máy (Model number) của PC?",
        image: "images/gs6_lv3_ot1_cau1.jpg", 
        options: ["x64-based PC", "UEFI", "10.0.18363 Build 18363", "81Y6"],
        correct_answer: [3]
    },
    {
        id: 2,
        type: "multiple_choice",
        question: "Tại sao người dùng biết hệ điều hành và phiên bản của hệ điều hành rất quan trọng? (Chọn 2)",
        options: ["Nhiều ứng dụng miễn phí", "Các bản cập nhật phiên bản khả dụng", "Phần mềm có giá đắt", "Các tác vụ khác nhau giữa các hệ điều hành"],
        correct_answer: [1,3]
    },
    {
        id: 3,
        type: "ordering",
        question: "Hãy sắp xếp các bước sử dụng Start Menu để gỡ cài đặt Outlook trên PC:",
        options: [
            "Chọn gỡ cài đặt (Uninstall)", 
            "Chọn biểu tượng Start Menu", 
            "Chọn và giữ (hoặc nhấp chuột phải) Outlook"
        ],
        correct_answer: [
            "Chọn biểu tượng Start Menu", 
            "Chọn và giữ (hoặc nhấp chuột phải) Outlook",
            "Chọn gỡ cài đặt (Uninstall)"
        ]
    },
    {
        id: 4,
        type: "single_choice",
        question: "Hãy chọn từ thích hợp để hoàn thành phát biểu sau đây: Số kiểu máy tính (Computer model number) là một số được cá nhân hóa do nhà sản xuất __________ của nó cấp cho một máy tính.",
        options: [
            "Model", 
            "Hardware", 
            "OS", 
            "Software"],
        correct_answer: [1]
    },
    {
        id: 5,
        type: "single_choice",
        question: "Bạn cần tìm các trình điều khiển (Driver) cho máy tính xách tay chạy Windows 10. Trình quản lý thiết bị hiển thị thiết bị không xác định đối với một vài thành phần thiết bị. Bạn nên làm gì?",
        options: [
            "Từ trình quản lý thiết bị, tìm nhanh các thay đổi phần cứng", 
            "Sử dụng số dòng máy (Model number) của máy để tìm driver trên trang web của nhà sản xuất máy tính xách tay", 
            "Mua phần mềm cài đặt driver từ cửa hàng đã bán máy tính", 
            "Khởi động lại máy tính và sử dụng công cụ sửa chữa cho Windows 10"],
        correct_answer: 1
    },
    {
        id: 6,
        type: "single_choice",
        question: "Để một ứng dụng hoạt động, phần cứng và phần mềm của máy tính phải có chung điểm gì?",
        options: [
            "Mã bổ sung (Supplemental code)",
            "Mạng (Network)",
            "Ngôn ngữ nhị phân (Binary language)",
            "Chương trình đặc biệt (Special program)"
        ],
        correct_answer: 2
    },
    {
        id: 7,
        type: "ordering",
        question: "Hãy sắp xếp các bước sử dụng Menu Apple để kiểm tra các bản cập nhật trên máy Mac:",
        options: [
            "Chọn Software Update",
            "Chọn biểu tượng Menu Apple",
            "Chọn System Preferences"
        ],
        correct_answer: [
            "Chọn biểu tượng Menu Apple",
            "Chọn System Preferences",
            "Chọn Software Update"
        ]
    },
    {
        id: 8,
        type: "true_false_matrix",
        question: "Bạn đăng một video lên trang Web của công ty. Người dùng than phiền rằng video tải quá lâu. Bạn cần giảm thời gian tải video. Đối với mỗi hành động, hãy chọn Có nếu hành động đó giúp tải video nhanh hơn. Ngược lại, hãy chọn Không.",
        statements: [
            "Tăng tốc độ bit của video",
            "Chuyển đổi video thành HTML5",
            "Giảm độ phân giải của video",
            "Thay thế video bằng phiên bản chưa nén"
        ],
        correct_answer: {
            0: "Không", // Tăng bitrate làm file nặng hơn -> tải lâu hơn
            1: "Có",    // HTML5 tối ưu hóa việc phát video trên trình duyệt
            2: "Có",    // Giảm độ phân giải giúp file nhẹ hơn -> tải nhanh hơn
            3: "Không"  // Bản chưa nén cực kỳ nặng -> tải rất chậm
        }
    },
    {
        id: 9,
        type: "single_choice",
        question: "Bạn hãy cho biết, tác dụng của việc tăng độ phân giải hình ảnh trước khi chụp ảnh?",
        options: [
            "Chất lượng hình ảnh được cải thiện",
            "Hình ảnh bị vỡ nét",
            "Kích thước hình ảnh nhỏ hơn",
            "Kích thước tập tin giảm xuống"
        ],
        correct_answer: 0 // Chất lượng hình ảnh được cải thiện
    },
    {
        id: 10,
        type: "true_false_matrix",
        question: "Đối với mỗi tình huống, hãy chọn Có nếu nên sử dụng phiên bản ứng dụng dựa trên Web. Ngược lại, hãy chọn Không.",
        statements: [
            "Bạn đang sử dụng một thiết bị có ít không gian lưu trữ",
            "Bạn muốn làm việc ngoại tuyến (Offline) bất cứ khi nào bạn muốn",
            "Bạn cần làm việc trên các thiết bị khác nhau"
        ],
        correct_answer: {
            0: "Có",   // Web app không tốn dung lượng cài đặt trên máy
            1: "Không", // Web app thường yêu cầu Internet, bản cài đặt (Desktop) mới tối ưu cho offline
            2: "Có"    // Web app chỉ cần trình duyệt, đăng nhập là làm được trên mọi thiết bị
        }
    },
    {
        id: 11,
        type: "single_choice",
        question: "Phần mềm giao tiếp và cung cấp ________ cho phần cứng.",
        options: [
            "Đề nghị (Suggestions)",
            "Hỗ trợ (Assistance)",
            "Phần mềm độc hại (Malware)",
            "Chỉ dẫn (Instructions)"
        ],
        correct_answer: 3 // Chỉ dẫn (Instructions)
    },
    {
        id: 12,
        type: "single_choice",
        question: "Chương trình nào sau đây có thể được sử dụng để đóng một ứng dụng đang bị đóng băng?",
        options: [
            "Task Manager",
            "Settings",
            "Windows Update",
            "Finder"
        ],
        correct_answer: 0 // Task Manager
    },
    {
        id: 13,
        type: "true_false_matrix",
        question: "Xác định xem các thiết bị kỹ thuật số có đáp ứng các yêu cầu hay không. Chọn Đúng nếu thiết bị đáp ứng các yêu cầu hoặc chọn Sai nếu không đáp ứng.",
        statements: [
            "Điện thoại thông minh có khả năng kiểm tra Email, gửi tin nhắn và nhận cuộc gọi thoại mà không cần Wi-Fi",
            "Một máy tính bảng là đủ để gộp và chỉnh sửa các video lớn trên trang Web của khách hàng",
            "Máy tính xách tay có thể di động để sử dụng trong lớp học, hỗ trợ truy cập vào đám mây và chạy hầu hết các ứng dụng văn phòng"
        ],
        correct_answer: {
            0: "Đúng",
            1: "Sai",
            2: "Đúng"
        }
    },
    {
        id: 14,
        type: "single_choice",
        question: "__________ liên quan đến máy móc được lập trình để suy nghĩ và thực hiện các hành động như con người.",
        options: [
            "RNGS",
            "iRobot",
            "Hệ thống SCADA",
            "Trí tuệ nhân tạo (Artificial intelligence)"
        ],
        correct_answer: 3 // Trí tuệ nhân tạo (Artificial intelligence)
    },
    {
        id: 15,
        type: "single_choice",
        question: "Tùy chọn nào sau đây là hành động giúp xóa dữ liệu cá nhân khỏi thiết bị?",
        options: [
            "Khôi phục cài đặt gốc",
            "Tắt thiết bị",
            "Cập nhật phần mềm",
            "Quét nhanh"
        ],
        correct_answer: 0 // Khôi phục cài đặt gốc
    },
    {
        id: 16,
        type: "single_choice",
        question: "Loại phần mềm nào sau đây không được cấp phép, không được bảo vệ bản quyền?",
        options: [
            "Phần mềm miễn phí (Freeware)",
            "Miền công cộng (Public domain)",
            "Cho phép (Permissive)",
            "Copyleft"
        ],
        correct_answer: 1 // Miền công cộng (Public domain)
    },
    {
        id: 17,
        type: "single_choice",
        question: "Tùy chọn nào sau đây được chỉ định cho mỗi phiên bản (Version) phần mềm?",
        options: [
            "Tên phiên bản duy nhất",
            "Cài đặt không thể thay đổi",
            "Mã hóa khác biệt",
            "Hướng dẫn chuyên đề"
        ],
        correct_answer: 0 // Tên phiên bản duy nhất
    },
    {
        id: 18,
        type: "multiple_choice",
        question: "Trung tâm dữ liệu điện toán đám mây tác động tiêu cực đến môi trường theo cách nào sau đây? (Chọn 2)",
        options: [
            "Các trung tâm này đổ nhiệt thải vào các nguồn nước gần đó, làm tăng nhiệt, vượt quá mức mà các sinh vật thủy sinh có thể tồn tại",
            "Các trung tâm này được xây dựng ở vùng khí hậu lạnh, gây tổn hại đến môi trường sống của gấu Bắc Cực và các động vật hoang dã khác",
            "Các trung tâm này sử dụng một lượng điện đáng kể được lấy từ các nguồn năng lượng không thể tái tạo",
            "Các trung tâm này sử dụng chất làm mát hóa học, thường được làm từ các vật liệu nguy hiểm"
        ],
        correct_answer: [2, 3]
    },
    {
        id: 19,
        type: "single_choice",
        question: "Loại phần mềm nào sau đây không cho phép chia sẻ hoặc sửa đổi mã nguồn?",
        options: [
            "Freeware",
            "Closed Source",
            "Shareware",
            "Public Domain"
        ],
        correct_answer: 1 // Closed Source
    },
    {
        id: 20,
        type: "true_false_matrix",
        question: "Với từng phát biểu về công nghệ tự động hoá, hãy chọn Đúng hoặc Sai.",
        statements: [
            "Tự động hóa sẽ thay thế một số vai trò công việc hiện có",
            "Tự động hóa sẽ tạo ra các vai trò công việc mới",
            "Các hoạt động cần tương tác xã hội có nhiều khả năng sẽ được tự động hóa nhiều hơn những hoạt động khác",
            "Các hoạt động cần thao tác vật lý trong môi trường được dự đoán có nhiều khả năng sẽ được tự động hóa nhiều hơn những hoạt động khác"
        ],
        correct_answer: {
            0: "Đúng", // Robot và phần mềm đang dần thay thế các công việc lặp đi lặp lại
            1: "Đúng", // Phát sinh các công việc mới về vận hành, bảo trì và lập trình hệ thống tự động
            2: "Sai",  // Tương tác xã hội và cảm xúc con người là thứ khó tự động hóa nhất
            3: "Đúng" // Các thao tác vật lý có tính quy luật (như trong nhà máy) rất dễ để tự động hóa
        }
    },
    {
        id: 21,
        type: "multiple_choice",
        question: "Những phím tắt nào được sử dụng phổ biến trên các ứng dụng phần mềm? (Chọn 2)",
        options: [
            "Ctrl+C",
            "Ctrl+D",
            "Shift+S",
            "Shift+P",
            "Ctrl+P"
        ],
        correct_answer: [0, 4] // Ctrl+C và Ctrl+P
    },
    {
        id: 22,
        type: "single_choice",
        question: "Ngày nay, các thiết bị có thể trở nên lỗi thời rất nhanh. Người dùng nên làm gì với thiết bị mà họ muốn loại bỏ?",
        options: [
            "Lưu trữ cho các thế hệ tương lai",
            "Tái chế",
            "Ném đi",
            "Sử dụng cho một dự án nghệ thuật"
        ],
        correct_answer: 1 // Tái chế
    },
    {
        id: 23,
        type: "single_choice",
        question: "Định dạng tập tin video phổ biến nhất được sử dụng để đăng lên mạng xã hội là gì?",
        options: [
            "PRO",
            "JPEG",
            "MP4",
            "SAV"
        ],
        correct_answer: 2 // MP4
    },
    {
        id: 24,
        type: "multiple_choice",
        question: "Tùy chọn nào sau đây là đúng với tập tin có độ phân giải cao so với tập tin có độ phân giải thấp? (Chọn 3)",
        options: [
            "Độ sắc nét và rõ ràng hơn",
            "Thời gian tải xuống ngắn hơn",
            "Thời gian tải xuống lâu hơn",
            "Số lượng pixel bị giảm",
            "Kích thước tập tin lớn hơn"
        ],
        // Đáp án: Sắc nét hơn, Tải xuống lâu hơn, Kích thước lớn hơn
        correct_answer: [0, 2, 4] 
    },
    {
        id: 25,
        type: "single_choice",
        question: "Bạn có thể sử dụng tổ hợp phím nào sau đây để lưu tài liệu?",
        options: [
            "Ctrl+P",
            "Ctrl+C",
            "Ctrl+S",
            "Ctrl+D"
        ],
        correct_answer: 2 // Ctrl+S
    },
    {
        id: 26,
        type: "multiple_choice",
        question: "Loại tập tin WAV thường được sử dụng cho những loại phương tiện nào? (Chọn 3)",
        options: [
            "Social media posts",
            "CDs",
            "TV",
            "Web pages",
            "Web videos",
            "DVDs"
        ],
        // Đáp án chuẩn IC3: CDs, TV, và DVDs
        correct_answer: [1, 2, 5] 
    },
    {
        id: 27,
        type: "single_choice",
        question: "Phát biểu sau đây là Đúng hay Sai: 'Một lợi ích của lập phiên bản đám mây là người dùng có thể lưu trữ nhiều phiên bản của một tập tin'.",
        options: [
            "Sai",
            "Đúng"
        ],
        correct_answer: 1 // Đúng
    },
    {
        id: 28,
        type: "single_choice",
        question: "Bạn hãy cho biết, phát biểu sau đây là Đúng hay Sai: 'Các thiết bị cũ có thể phát nội dung HD tốt tương tự như các thiết bị mới hơn, vì vậy bạn nên luôn xuất ra định dạng 1080p là một ý tưởng tốt'.",
        options: [
            "Đúng",
            "Sai"
        ],
        correct_answer: 1 // Sai
    },
    {
        id: 29,
        type: "single_choice",
        question: "Bạn hãy cho biết, phát biểu sau đây là Đúng hay Sai: 'Người dùng có thể làm bất cứ điều gì mà họ muốn sau khi họ đã cài đặt phần mềm của mình. Họ không bắt buộc phải đọc giấy phép phần mềm'.",
        options: [
            "Sai",
            "Đúng"
        ],
        correct_answer: 0 // Sai
    },
    {
        id: 30,
        type: "single_choice",
        question: "Bạn cần tìm ra phiên bản Windows mà máy tính của bạn đang chạy. Bạn nên thực hiện hành động này ở khu vực nào của cửa sổ Cài đặt (Settings)?",
        image: "images/gs6_lv3_ot1_cau30.jpg",
        options: [
            "Hệ thống (Màn hình, âm thanh, thông báo, nguồn)",
            "Thiết bị (Bluetooth, máy in, chuột)",
            "Điện thoại (Liên kết thiết bị Android, iPhone của bạn)",
            "Cập nhật & Bảo mật (Windows Update, phục hồi, sao lưu)"
        ],
        correct_answer: 0 // Hệ thống
    },
    {
        id: 31,
        type: "multiple_choice",
        question: "Các chuyên gia lo ngại rằng xã hội sẽ mất đi một số kỹ năng do sự phụ thuộc vào công nghệ. Tùy chọn nào sau đây là kỹ năng có thể ít được vận dụng do sử dụng công nghệ? (Chọn 3)",
        options: [
            "Phối hợp tay và mắt",
            "Tính nhẩm",
            "Điều hướng bản đồ",
            "Sự khéo léo",
            "Học thuộc lòng",
            "Tổ chức"
        ],
        // Đáp án: Tính nhẩm, Điều hướng bản đồ, và Học thuộc lòng
        correct_answer: [1, 2, 4] 
    },
    {
        id: 32,
        type: "single_choice",
        question: "Bạn lên kế hoạch bán máy tính của mình. Bạn xóa các tập tin cá nhân trên ổ cứng và sau đó, bạn dọn sạch thùng rác của máy tính (Recycle Bin hoặc Trash). Trên ổ cứng của bạn còn lại dữ liệu nào?",
        options: [
            "Tham chiếu đến các tập tin trên ổ cứng sẽ bị xóa. Dữ liệu tập tin vẫn còn",
            "Không còn gì. Tham chiếu đến các tập tin trên ổ cứng và dữ liệu tập tin bị xóa hoàn toàn",
            "Tham chiếu đến các tập tin trên ổ cứng vẫn còn. Dữ liệu tập tin bị xóa hoàn toàn",
            "Tất cả. Tham chiếu đến các tập tin trên ổ cứng vẫn còn. Dữ liệu tập tin vẫn còn"
        ],
        correct_answer: 0 // Tham chiếu bị xóa, dữ liệu vẫn còn
    },
    {
        id: 33,
        type: "multiple_choice",
        question: "Tùy chọn nào sau đây là ví dụ về AI? (Chọn 2)",
        options: [
            "Chuyển đổi âm thanh thành văn bản",
            "Ghi âm nhạc",
            "Sử dụng GPS",
            "Dự đoán các giao dịch ngân hàng gian lận"
        ],
        // Đáp án: Chuyển đổi âm thanh thành văn bản và Dự đoán giao dịch gian lận
        correct_answer: [0, 3] 
    },
    {
        id: 34,
        type: "single_choice",
        question: "Bạn lưu và chỉnh sửa tập tin trên Google Drive. Tính năng lập phiên bản trên nền tảng điện toán đám mây (Cloud versioning) đã được bật. Bạn xóa phiên bản trực tiếp (Live version) của tập tin mà không chỉ định số khởi tạo (Generation number). Tùy chọn nào sau đây là đúng khi nói về kết quả sẽ xảy ra?",
        options: [
            "Phiên bản trực tiếp (Live version) bị xoá vĩnh viễn",
            "Một bản sao của phiên bản không hiện hành (Noncurrent version) thay thế phiên bản trực tiếp (Live version) và nhận số khởi tạo (Generation number) mới",
            "Phiên bản không hiện hành (Noncurrent version) bị xoá vĩnh viễn",
            "Phiên bản trực tiếp (Live version) trở thành phiên bản không hiện hành (Noncurrent version) và số khởi tạo (Generation number) sẽ được giữ nguyên"
        ],
        correct_answer: 3 // Một bản sao của phiên bản không hiện hành thay thế phiên bản trực tiếp
    },
    {
        id: 35,
        type: "single_choice",
        question: "Điều gì sẽ xảy ra khi bạn phóng to một hình ảnh Bitmap nhỏ được tải xuống từ trang Web?",
        options: [
            "Hình ảnh bị vỡ nét",
            "Độ phân giải ảnh giảm xuống",
            "Hình ảnh rõ nét hơn",
            "Kích thước tập tin ảnh giảm xuống"
        ],
        correct_answer: 0 // Hình ảnh bị vỡ nét
    },
    {
        id: 36,
        type: "single_choice",
        question: "Máy tính của bạn sử dụng hệ điều hành Windows 10. Bạn muốn thay đổi trình duyệt mở liên kết từ Email từ Microsoft Edge sang Google Chrome. Tùy chọn nào sau đây là thích hợp để bạn có thể tùy chỉnh?",
        options: [
            "Trình quản lý tác vụ (Task Manager)",
            "Các ứng dụng mặc định (Default apps)",
            "Các thông báo (Notifications)",
            "Các cài đặt quyền riêng tư cho Email (Email privacy settings)"
        ],
        correct_answer: 1 // Các ứng dụng mặc định (Default apps)
    },
    {
        id: 37,
        type: "multiple_choice",
        question: "Loại dữ liệu nào sau đây sẽ bị xóa khi thiết bị di động Android được khôi phục cài đặt gốc? (Chọn 3)",
        options: [
            "Các hình ảnh",
            "Ứng dụng nhắn tin văn bản",
            "Trình bảo vệ màn hình được tải sẵn",
            "Thông tin tài khoản Google của người dùng",
            "Các ứng dụng đã tải xuống"
        ],
        // Đáp án: Hình ảnh, Thông tin tài khoản Google, và Các ứng dụng đã tải xuống
        correct_answer: [0, 3, 4] 
    },
    {
        id: 38,
        type: "single_choice",
        question: "Kích thước tập tin nào sau đây là lớn nhất?",
        options: [
            "16 gigabyte (GB)",
            "3 petabyte (PB)",
            "1,44 megabyte (MB)",
            "640 kilobyte (KB)",
            "2 terabyte (TB)"
        ],
        correct_answer: 1 // 3 petabyte (PB)
    },
    {
        id: 39,
        type: "matching",
        question: "Hãy nối cách khắc phục sự cố tương ứng với vấn đề mà bạn gặp phải.",
        pairs: [
            {
                issue: "Màn trập máy ảnh trên điện thoại phát ra âm thanh khi bạn đang không chụp ảnh",
                solution: "Kiểm tra các quyền ứng dụng"
            },
            {
                issue: "Các trang Web hiển thị nội dung chậm khi bạn đang tìm kiếm thông tin trên internet",
                solution: "Kiểm tra kết nối mạng"
            },
            {
                issue: "Màn hình máy tính bị đóng băng khi bạn đang làm việc với tập tin dự án",
                solution: "Kiểm tra mức độ sử dụng tài nguyên trên trình quản lý tác vụ (Task manager)"
            },
            {
                issue: "Khi bạn khởi động máy tính, bạn nghe thấy tiếng tích tắc nhịp nhàng bên trong thùng máy",
                solution: "Kiểm tra hiện tượng mòn đầu đọc/ghi trên ổ đĩa cứng"
            }
        ],
        // Đáp án logic để bạn tham khảo hoặc dùng cho logic chấm điểm
        correct_answer: {
            0: 0, // Màn trập âm thanh lạ -> Quyền ứng dụng (có thể bị phần mềm lạ truy cập camera)
            1: 1, // Web chậm -> Kết nối mạng
            2: 2, // Máy treo -> Task Manager (kiểm tra CPU/RAM)
            3: 3  // Tiếng tích tắc -> Lỗi cơ học ổ cứng (HDD)
        }
    },
    {
        id: 40,
        type: "single_choice",
        question: "Hình ảnh và văn bản trên màn hình máy tính xách tay của bạn xuất hiện méo mó. Bạn cần giải quyết vấn đề này. Việc đầu tiên bạn nên làm là gì?",
        options: [
            "Kiểm tra cài đặt hiển thị",
            "Gắn thêm một màn hình ngoài",
            "Tải xuống tài liệu hướng dẫn sử dụng của máy tính",
            "Gọi hỗ trợ kỹ thuật"
        ],
        correct_answer: 0 // Kiểm tra cài đặt hiển thị
    },
    //OT2
    {
        id: 41,
        type: "single_choice",
        question: "Bạn mua một chương trình phần mềm để phục vụ cho việc thực hiện dự án của mình. Sau khi bạn đã hoàn thành dự án, một người bạn hỏi mượn chương trình phần mềm này. Bạn không biết việc cho mượn chương trình phần mềm như vậy có được phép hay không. Tùy chọn nào sau đây là nơi thích hợp để bạn tìm kiếm thông tin?",
        options: [
            "Danh sách kiểm soát truy cập (ACL)",
            "Thỏa thuận giấy phép người dùng cuối (EULA)",
            "Bảng đánh giá phần mềm điện tử (ESRB)",
            "Hệ thống quản lí nội dung (CMS)"
        ],
        correct_answer: 1 // Thỏa thuận giấy phép người dùng cuối (EULA)
    },
    {
        id: 42,
        type: "single_choice",
        question: "Trước khi đặt lại máy Mac, trước tiên người dùng phải đăng xuất tất cả các ứng dụng đã sử dụng hoặc được cấp phép trên máy tính. Tùy chọn nào sau đây, người dùng có thể chọn để bắt đầu quá trình này?",
        options: [
            "System Preferences",
            "Finder",
            "Disk Utility",
            "Settings"
        ],
        correct_answer: 0 // System Preferences
    },
    {
        id: 43,
        type: "single_choice",
        question: "Bạn tuỳ chỉnh phần cài đặt Google Chrome của mình. Bạn không hài lòng với một số thay đổi. Bạn cần trả Google Chrome về trạng thái mặc định bằng cách chỉ sử dụng một lệnh trên menu Settings như hiển thị trong hình. Bạn nên chọn lệnh nào?",
        image: "images/gs6_lv3_ot2_cau3.jpg", // Bạn thay tên file ảnh thực tế của bạn vào đây
        options: [
            "You and Google (bạn và Google)",
            "Appearance (hình thức hiển thị)",
            "On startup (khi khởi động)",
            "Reset and clean up (đặt lại và dọn dẹp)",
            "Default browser (trình duyệt mặc định)"
        ],
        correct_answer: 3 // Reset and clean up (đặt lại và dọn dẹp)
    },
    {
        id: 44,
        type: "single_choice",
        question: "Mục đích của đạo luật về trách nhiệm giải trình và cung cấp thông tin bảo hiểm y tế (HIPAA - Health Insurance Portability and Accountability Act) là gì?",
        options: [
            "Để bảo vệ hợp pháp thông tin y tế của cá nhân bằng cách hạn chế quyền truy cập đến thông tin y tế của chính họ hoặc người giám hộ đáng tin cậy",
            "Để giúp các cá nhân hiểu rõ hơn về thông tin y tế của họ",
            "Để ràng buộc các chuyên gia y tế một cách hợp pháp với một cuộc sống bí mật và hoài nghi",
            "Để đảm bảo rằng thông tin y tế được chia sẻ với tất cả các thành viên trong gia đình có yêu cầu"
        ],
        correct_answer: 0 // Để giúp các cá nhân hiểu rõ hơn về thông tin y tế của họ
    },
    {
        id: 45,
        type: "matching",
        question: "Hoàn thành các câu sau đây bằng cách lựa chọn đúng tùy chọn từ mỗi danh sách thả xuống để phân loại các yếu tố xác thực.",
        pairs: [
            {
                issue: "Dấu vân tay và nhận dạng khuôn mặt là những ví dụ về yếu tố xác thực",
                solution: "Sinh trắc học"
            },
            {
                issue: "Điện thoại thông minh và thẻ ra vào của nhân viên là những ví dụ về yếu tố xác thực",
                solution: "Vật lý"
            },
            {
                issue: "Mật khẩu và số nhận dạng cá nhân (PIN) là những ví dụ về yếu tố xác thực",
                solution: "Logic"
            }
        ],
        correct_answer: {
            0: 0, // Sinh trắc học (Biometric)
            1: 1, // Vật lý (Physical/Possession)
            2: 2  // Logic (Knowledge)
        }
    },
    {
        id: 46,
        type: "multiple_choice",
        question: "Bạn đang thực hiện một nghiên cứu trên nền tảng trực tuyến. Bạn thấy một loạt các video có vẻ hỗ trợ giả thuyết của mình. Bạn cần xác định xem liệu video có bị chỉnh sửa hay không để thay đổi thông điệp ban đầu. Hai phương pháp chỉnh sửa âm thanh nào cho biết rằng video đã được chỉnh sửa để thay đổi thông điệp? (Chọn 2)",
        options: [
            "Phụ đề đã được thêm vào âm thanh gốc",
            "Âm thanh gốc đã được thay thế bằng nhạc nền",
            "Giọng thuyết minh giới thiệu người quay phim đã được thêm vào cuối video",
            "Từ ngữ được sắp xếp lại hoặc thêm vào"
        ],
        correct_answer: [1, 3] 
    },
    {
        id: 47,
        type: "matching",
        question: "Một người bạn của bạn bị bắt nạt. Bạn ấy cần báo cáo hành vi bắt nạt với ai? Nối mỗi cơ quan có thẩm quyền với hành vi bắt nạt tương ứng.",
        pairs: [
            {
                issue: "Kẻ bắt nạt đe dọa sẽ gây tổn thương thể chất tới bạn của bạn",
                solution: "Cơ quan hành pháp"
            },
            {
                issue: "Kẻ bắt nạt đăng hàng loạt lời lăng mạ bạn của bạn trên một tài khoản mạng xã hội bị tấn công",
                solution: "Nhà cung cấp mạng xã hội"
            },
            {
                issue: "Kẻ bắt nạt viết lời lăng mạ từ bài đăng trên mạng xã hội lên tủ khoá trong lớp thể dục của người bạn kia",
                solution: "Khoa trong trường"
            }
        ],
        correct_answer: {
            0: 0, // Đe dọa tổn thương thể chất -> Cơ quan hành pháp (Cảnh sát)
            1: 1, // Lăng mạ trên tài khoản bị hack -> Nhà cung cấp mạng xã hội
            2: 2  // Viết lên tủ khóa ở trường -> Khoa/Ban giám hiệu trong trường
        }
    },
    {
        id: 48,
        type: "true_false_matrix",
        question: "Bạn đang tiến hành nghiên cứu trên mạng trong một tiết học. Với mỗi câu tìm kiếm, hãy chọn Có nếu phải sử dụng toán tử tìm kiếm (Boolean) để hỗ trợ xác định các kết quả liên quan nhanh hơn. Ngược lại, hãy chọn Không.",
        statements: [
            "Các sở thú bên ngoài Châu Phi",
            "Thông tin chung về ngựa vằn",
            "Một câu trích dẫn cụ thể của một tác giả nào đó",
            "Voi ở nam bán cầu"
        ],
        correct_answer: {
            0: "Có",
            1: "Không",
            2: "Có",
            3: "Có"
        }
    },
    {
        id: 49,
        type: "multiple_choice",
        question: "Xác thực đa yếu tố (MFA) giúp cung cấp bảo mật bổ sung cho tài khoản bằng cách yêu cầu nhập hai hoặc nhiều thông tin đăng nhập khi đăng nhập. Đó là thông tin đăng nhập phổ biến nào? (Chọn 3)",
        options: [
            "Dấu vân tay (Fingerprint)",
            "Ngày (Date)",
            "Mã PIN",
            "Tên người dùng (Username)",
            "Mật khẩu (Password)"
        ],
        // Đáp án: Dấu vân tay, Mã PIN, và Mật khẩu
        correct_answer: [0, 2, 4]
    },
    {
        id: 50,
        type: "ordering",
        question: "Sắp xếp các bước để cài đặt quyền riêng tư của tài khoản Facebook. Sử dụng Privacy Shortcuts để kiểm tra một số cài đặt quan trọng. Kiểm tra ai có thể xem những gì mà bạn chia sẻ:",
        options: [
            "Chọn Ai có thể xem những gì bạn chia sẻ",
            "Chọn Quyền riêng tư (Privacy)",
            "Chọn Kiểm tra một vài cài đặt quan trọng",
            "Chọn Cài đặt (Settings)",
            "Chọn mũi tên thả xuống của Tài khoản (Account)",
            "Chọn tiếp tục"
        ],
        correct_answer: [
            "Chọn mũi tên thả xuống của Tài khoản (Account)",
            "Chọn Cài đặt (Settings)",
            "Chọn Quyền riêng tư (Privacy)",
            "Chọn Kiểm tra một vài cài đặt quan trọng",
            "Chọn Ai có thể xem những gì bạn chia sẻ",
            "Chọn tiếp tục"
        ]
    },
    {
        id: 51,
        type: "single_choice",
        question: "Bạn sao chép một đoạn video dài 30 giây từ internet. Bạn không biết ai đã tạo ra video này. Tùy chọn nào sau đây là trường hợp sử dụng đoạn video không hợp pháp?",
        options: [
            "Bạn sử dụng đoạn video để dạy học",
            "Bạn sử dụng đoạn video trong bản tin",
            "Bạn tạo nên một bản Parody có sử dụng đoạn video đó",
            "Bạn tạo ra một quảng cáo chính trị có sử dụng đoạn video đó"
        ],
        correct_answer: 3 // Bạn tạo ra một quảng cáo chính trị có sử dụng đoạn video đó
    },
    {
        id: 52,
        type: "true_false_matrix",
        question: "Với từng phát biểu sau đây, hãy chọn ĐÚNG nếu là phát biểu giúp bảo vệ tài sản trí tuệ của bạn hoặc chọn SAI nếu là phát biểu mang lại rủi ro cho tài sản trí tuệ của bạn.",
        statements: [
            "Đăng ký bản quyền, nhãn hiệu và bằng sáng chế",
            "Yêu cầu từng nhân viên ký thỏa thuận không tiết lộ",
            "Cấp quyền truy cập không giới hạn các sản phẩm của bạn cho bên thứ ba",
            "Thảo luận ý tưởng của bạn với thật nhiều người để đánh giá sự quan tâm"
        ],
        correct_answer: {
            0: "Đúng",
            1: "Đúng",
            2: "Sai",
            3: "Sai"
        }
    },
    {
        id: 53,
        type: "matching",
        question: "Bạn đang thực hiện một nghiên cứu trên nền tảng trực tuyến. Khi nào bạn nên sử dụng toán tử tìm kiếm (Boolean)? Nối chức năng và phương pháp tương ứng với từng toán tử.",
        pairs: [
            { issue: "Toán tử AND", solution: "Thu hẹp kết quả bằng cách kết hợp các thuật ngữ" },
            { issue: "Toán tử OR", solution: "Mở rộng kết quả bằng cách bao gồm nhiều lựa chọn thay thế" },
            { issue: "Toán tử NOT", solution: "Thu hẹp kết quả bằng cách loại trừ thuật ngữ" }
        ],
        correct_answer: {
            0: 0, // AND -> Kết hợp các thuật ngữ
            1: 1, // OR -> Mở rộng bằng nhiều lựa chọn
            2: 2  // NOT -> Loại trừ
        }
    },
    {
        id: 54,
        type: "single_choice",
        question: "Tùy chọn quyền riêng tư nào của Facebook cho phép người dùng chia sẻ thông tin với tất cả bạn bè của họ, ngoại trừ một số lựa chọn?",
        options: [
            "Friends except",
            "Public",
            "Specific friends",
            "Friends",
            "Only me"
        ],
        correct_answer: 0 // Friends except
    },
    {
        id: 55,
        type: "true_false_matrix",
        question: "Bạn cần bảo vệ thông tin nhận dạng cá nhân (PII) của mình một cách thích hợp. Với mỗi phát biểu sau đây, hãy chọn Đúng hoặc Sai.",
        statements: [
            "Thông tin nhận dạng cá nhân (PII) mà các trang web thu thập có thể bị sử dụng cho các mục đích đánh cắp danh tính",
            "Việc sử dụng xác thực đa yếu tố làm tăng nguy cơ người khác truy cập PII của bạn",
            "Việc đóng tài khoản trực tuyến vĩnh viễn sẽ xoá PII của bạn khỏi máy chủ lưu trữ trang web"
        ],
        correct_answer: {
            0: "Đúng",
            1: "Sai",
            2: "Sai"
        }
    },
    {
        id: 56,
        type: "single_choice",
        question: "Em hãy cho biết, phát biểu sau đây là Đúng hay Sai: 'Nếu một cá nhân tận mắt chứng kiến hành vi nguy hiểm, bất hợp pháp hoặc gây hại, thì hành động thích hợp là báo cho nhà chức trách'.",
        options: [
            "Đúng",
            "Sai"
        ],
        correct_answer: 0 // Đúng
    },
    {
        id: 57,
        type: "single_choice",
        question: "Hãy điền từ thích hợp vào chỗ trống để hoàn thành phát biểu sau đây: '__________ xảy ra khi ai đó sử dụng các từ hoặc hình ảnh có hại trên mạng để đe dọa, làm tổn thương, xấu hổ hoặc cố tình gây ra ảnh hưởng tiêu cực đến người khác'.",
        options: [
            "Tweeting",
            "Challenging",
            "Cyberbullying",
            "Policing"
        ],
        correct_answer: 2 // Cyberbullying
    },
    {
        id: 58,
        type: "true_false_matrix",
        question: "Rác thải điện tử (E-waste) là các thiết bị điện tử đã qua sử dụng bị vứt bỏ, được quyên tặng hoặc đưa cho người tái chế. Với mỗi phát biểu về rác thải điện tử, hãy chọn Đúng hoặc Sai.",
        statements: [
            "Hơn 60% rác thải điện tử được tái chế",
            "Rác thải điện tử là loại chất thải phát triển chậm nhất trên toàn thế giới",
            "Rác thải điện tử chứa các kim loại quý như vàng và bạc có thể được phục hồi và tái sử dụng",
            "Rác thải điện tử chứa các kim loại độc hại như chì và thuỷ ngân là nguyên nhân gây bệnh cho con người nếu chúng ngấm vào nguồn nước ngầm"
        ],
        correct_answer: {
            0: "Sai",
            1: "Sai",
            2: "Đúng",
            3: "Đúng"
        }
    },
    {
        id: 59,
        type: "single_choice",
        question: "Hãy chọn từ thích hợp điền vào chỗ trống để hoàn thành phát biểu sau đây: 'Người dùng nên cố gắng hết sức để giữ bí mật thông tin của họ và thông tin của cấp trên ___________ của họ không nên được viết ra và để lại bất cứ nơi nào mà người khác có thể tình cờ nhìn thấy chúng'.",
        options: [
            "Work hours",
            "Passwords",
            "Email addresses",
            "Phone numbers"
        ],
        correct_answer: 1 // Passwords
    },
    {
        id: 60,
        type: "single_choice",
        question: "Nếu ai đó chọn chia sẻ thông tin tài khoản của họ với một người bạn thân, người bạn đó nên làm gì với thông tin đó?",
        options: [
            "Đánh cắp và chia sẻ thông tin nhận dạng cá nhân",
            "Giữ thông tin an toàn",
            "Mạo danh bạn bè như một trò đùa",
            "Sử dụng thông tin để mua hàng"
        ],
        correct_answer: 1 // Giữ thông tin an toàn
    },
    {
        id: 61,
        type: "true_false_matrix",
        question: "Bạn phải cập nhật kiến thức về quyền công dân kỹ thuật số của mình. Với mỗi phát biểu sau đây, hãy chọn Có nếu bạn cần phải thường xuyên xem lại kiến thức. Ngược lại, hãy chọn Không.",
        statements: [
            "Luật về bản quyền",
            "Các quy tắc ứng xử (Etiquette) trên môi trường kỹ thuật số",
            "Cài đặt quyền riêng tư trên mạng truyền thông xã hội"
        ],
        correct_answer: {
            0: "Có",
            1: "Có",
            2: "Không"
        }
    },
    {
        id: 62,
        type: "single_choice",
        question: "Bạn lên kế hoạch tìm kiếm một công việc trong ngành công nghệ thông tin. Bạn cần cập nhật kiến thức về các công nghệ kỹ thuật số mới nhất. Bạn nên làm gì?",
        options: [
            "Hàng tháng, bạn cần viết một bài đăng trên Blog về công nghệ mới mà bạn quan tâm",
            "Đăng ký và đọc thông báo từ các trang web công nghệ uy tín",
            "Tình nguyện tạo bản tin hàng tháng cho một trường học địa phương",
            "Làm mới kiến thức của bạn về công nghệ kỹ thuật số bằng cách tham gia một lớp học mới ba năm một lần"
        ],
        correct_answer: 1 // Đăng ký và đọc thông báo từ các trang web công nghệ uy tín
    },
    {
        id: 63,
        type: "single_choice",
        question: "Một trong những cách tốt nhất để giữ bí mật thông tin tài khoản và mật khẩu là gì?",
        options: [
            "Sử dụng miếng dán bảo vệ màn hình",
            "Tránh chia sẻ thông tin với người khác",
            "Trả tiền cho một người bạn để giữ thông tin an toàn",
            "Chia sẻ thông tin với gia đình và bạn bè"
        ],
        correct_answer: 1 // Tránh chia sẻ thông tin với người khác
    },
    {
        id: 64,
        type: "multiple_choice",
        question: "Người dùng có thể thực hiện một số phương pháp công nghệ lành mạnh nào liên quan đến môi trường? (Chọn 3)",
        options: [
            "Hãy thử thanh toán không cần giấy tờ",
            "Sử dụng các ứng dụng có thể giúp theo dõi mức tiêu thụ nhiên liệu và nước",
            "Tái chế thiết bị cũ",
            "Vứt bỏ các thiết bị cũ",
            "In tất cả các tài liệu mong muốn"
        ],
        // Đáp án: Thanh toán không giấy tờ, Sử dụng ứng dụng theo dõi, Tái chế thiết bị cũ
        correct_answer: [0, 1, 2]
    },
    {
        id: 65,
        type: "true_false_matrix",
        question: "Bạn làm việc cho một công ty thiết kế kiến trúc vào ban ngày và tham gia lớp học thiết kế tại trường cao đẳng cộng đồng vào buổi tối. Bạn có các tài khoản email được cung cấp bởi công ty và trường học. Bạn sử dụng tài khoản Gmail để nhận và gửi email cho các việc cá nhân. Bạn cần gửi một email có chứa các thông tin riêng tư. Bạn không muốn công ty hay trường học biết đến email này. Với mỗi phát biểu sau đây, hãy chọn Có nếu công ty hoặc nhà trường sẽ biết nội dung email. Ngược lại, hãy chọn Không.",
        statements: [
            "Gửi email từ một chiếc điện thoại thông minh sử dụng tài khoản email của công ty cấp",
            "Gửi email từ một máy tính tại nơi làm việc sử dụng tài khoản email của công ty cấp",
            "Gửi email từ một máy tính cá nhân sử dụng tài khoản email của trường",
            "Gửi email từ một máy tính của trường sử dụng tài khoản email cá nhân"
        ],
        correct_answer: {
            0: "Có",
            1: "Có",
            2: "Có",
            3: "Không"
        }
    },
    {
        id: 66,
        type: "true_false_matrix",
        question: "Một trách nhiệm của việc trở thành một công dân kỹ thuật số tốt là báo cáo hành vi nguy hiểm, bất hợp pháp hoặc có hại. Chọn Đúng nếu hành vi nguy hiểm, bất hợp pháp hoặc có hại hoặc chọn Sai nếu không.",
        statements: [
            "Sau khi lướt qua một vài trang web chơi game, một trang bật lên (Pops Up) trên màn hình máy tính của bạn yêu cầu trả tiền để mở khóa máy tính của bạn",
            "Yêu cầu bạn phải tạo một tài khoản để truy cập các chương trình giảm giá đặc biệt trên trang web sản phẩm. Tài khoản muốn tên, địa chỉ, điện thoại và ngày sinh của bạn",
            "Tạo nhiều hồ sơ trên một trang mạng xã hội - một hồ sơ cho mục đích cá nhân của bạn và một hồ sơ cho mục đích kinh doanh",
            "Bạn nhận được một email thông báo rằng tài khoản ngân hàng của bạn đã bị xâm phạm và hướng dẫn bạn nhấp vào một liên kết trong email để đăng nhập và chứng minh đó là tài khoản của bạn"
        ],
        correct_answer: {
            0: "Đúng",
            1: "Sai",
            2: "Sai",
            3: "Đúng"
        }
    },
    {
        id: 67,
        type: "single_choice",
        question: "Bạn là trợ lý huấn luyện của một giải bóng đá dành cho người lớn. Bạn thu thập thông tin đăng ký của mỗi cầu thủ. Bạn quyết định tạo một danh sách liên hệ của đội. Thông tin nào sau đây của cầu thủ mà bạn Không được chia sẻ khi chưa có sự đồng ý của cầu thủ?",
        options: [
            "Họ và tên của cầu thủ",
            "Các chứng dị ứng của cầu thủ",
            "Thành phố mà cầu thủ đang cư trú",
            "Tên cầu thủ và vị trí của cầu thủ trong đội"
        ],
        correct_answer: 1 // Các chứng dị ứng của cầu thủ
    },
    {
        id: 68,
        type: "multiple_choice",
        question: "Nếu một thách thức internet gây ra rủi ro về sức khỏe và liên quan đến hoạt động bất hợp pháp, thì điều đó nên được báo cáo cho ai? (Chọn 2)",
        options: [
            "Một người bạn",
            "Nền tảng truyền thông xã hội của bài viết",
            "Ông bà",
            "Cảnh sát",
            "Một cuộc trò chuyện nhóm"
        ],
        // Đáp án: Nền tảng truyền thông xã hội và Cảnh sát
        correct_answer: [1, 3]
    },
    {
        id: 69,
        type: "multiple_choice",
        question: "Người dùng nên tìm kiếm những phẩm chất nào trong kết quả tìm kiếm trực tuyến của họ? (Chọn 2)",
        options: [
            "Quan trọng (Importance)",
            "Thiên kiến (Bias)",
            "Không liên quan (Irrelevance)",
            "Hiện hành (Currency)",
            "Tính khách quan (Objectivity)"
        ],
        // Đáp án: Hiện hành (Mới nhất) và Tính khách quan
        correct_answer: [3, 4]
    },
    {
        id: 70,
        type: "single_choice",
        question: "Kịch bản nào sau đây là được phép sử dụng một bộ phim thương mại? (Lưu ý: Bạn không sở hữu các quyền đối với bộ phim)",
        options: [
            "Bạn đăng phim lên trang Web của mình và cho phép mọi người trả tiền cho bạn mỗi lần họ xem phim",
            "Bạn chiếu phim bên cạnh nhà mình và mời các hàng xóm xem phim miễn phí cùng với bạn",
            "Bạn tạo ra một bản sao của bộ phim và đưa nó cho một người bạn. Người bạn đó đồng ý sẽ xóa bản sao sau khi xem phim",
            "Bạn sử dụng ba khung hình tĩnh từ bộ phim đó vào một bài đánh giá mà bạn đăng trực tuyến. Trang web mà bạn đăng bài đánh giá sẽ tạo ra doanh thu quảng cáo cho bạn"
        ],
        correct_answer: 3 // Bạn sử dụng ba khung hình tĩnh từ bộ phim đó vào một bài đánh giá...
    },
    {
        id: 71,
        type: "single_choice",
        question: "Có thể sử dụng toán tử tìm kiếm nào để xem kết quả chứa nhiều từ khóa?",
        options: [
            "BUT",
            "OR",
            "EXCERT",
            "AND"
        ],
        correct_answer: 3 // AND
    },
    {
        id: 72,
        type: "single_choice",
        question: "Người dùng có thể tin tưởng vào tiêu đề URL nào với thông tin thẻ tín dụng của họ?",
        options: [
            "www.",
            ".com",
            "http://",
            "https://"
        ],
        correct_answer: 3 // https://
    },
    {
        id: 73,
        type: "matching",
        question: "Bạn phải thực hiện tìm kiếm nhiều thông tin. Nối từng loại tìm kiếm mà bạn cần sử dụng trong danh sách ở cột bên phải tương ứng với câu cần tìm kiếm ở cột bên trái.",
        pairs: [
            { issue: "Số liệu thống kê dân số", solution: "Thông tin" },
            { issue: "Các tùy chọn bên thứ ba khi mua phần mềm", solution: "Giao dịch" },
            { issue: "Một trang cụ thể", solution: "Điều hướng" }
        ],
        correct_answer: {
            0: 0, // Số liệu -> Thông tin
            1: 1, // Mua phần mềm -> Giao dịch
            2: 2  // Trang cụ thể -> Điều hướng
        }
    },
    {
        id: 74,
        type: "multiple_choice",
        question: "Câu chuyện về tài liệu hướng dẫn ôn tập cho kì thi đại học xuất hiện trên nguồn cung cấp tin tức (News Feed) trên mạng truyền thông xã hội của bạn. Câu chuyện chứa nội dung sau đây: Một nghiên cứu gần đây được thực hiện trên 1000 sinh viên cho thấy rằng sinh viên đã cải thiện 25% điểm thi của mình khi sử dụng tài liệu hướng dẫn ôn tập này. Một giáo sư đại học nổi tiếng tham gia nghiên cứu đã phát biểu rằng: \"Nếu sinh viên không sử dụng tài liệu hướng dẫn ôn tập này, họ có thể không đạt được điểm số cần có để được nhận vào trường cao đẳng hoặc đại học\". Bạn thấy rằng nội dung của câu chuyện trên có chứa hai ngụy biện Logic phổ biến và câu trên có thể không chính xác hoặc đã thiên vị. Câu này chứa hai ngụy biện Logic nào sau đây? (Chọn 2)",
        options: [
            "Ngụy biện song đề sai (False Dilemma), hạn chế các lựa chọn có thể có để tránh việc cân nhắc một lựa chọn khác và khái quát vội vàng",
            "Ngụy biện tấn công cá nhân (Ad hominem), tập trung công kích cá nhân chứ không tấn công vào vấn đề",
            "Ngụy biện lợi dụng người nổi tiếng (Appeal to Authority), dựa vào uy tín của một chuyên gia có thể được nêu tên hoặc giấu tên, để làm cơ sở cho lập luận",
            "Ngụy biện vin vào truyền thống (Appeal to Tradition), bỏ qua những vấn đề trong quá khứ và cho rằng mọi thứ đã xảy ra trong quá khứ đều tốt đẹp hơn hiện tại"
        ],
        // Đáp án: Song đề sai (lựa chọn 1) và Lợi dụng người nổi tiếng (lựa chọn 3)
        correct_answer: [0, 2]
    },
    {
        id: 75,
        type: "multiple_choice",
        question: "Người dùng nên tìm kiếm điều gì để xác định độ tin cậy của tác giả? (Chọn 3)",
        options: [
            "Thông tin về cuộc sống gia đình của tác giả",
            "Các bài viết khác cùng chủ đề",
            "Trình độ học vấn của tác giả",
            "Kinh nghiệm sống của tác giả",
            "Các bình luận trên mạng xã hội thảo luận về dữ liệu của tác giả"
        ],
        // Đáp án: Các bài viết khác, Trình độ học vấn, Kinh nghiệm sống
        correct_answer: [1, 2, 3]
    },
    {
        id: 76,
        type: "single_choice",
        question: "Bộ lọc tìm kiếm nào sẽ cung cấp cho người dùng kết quả về các mặt hàng họ có thể mua?",
        options: [
            "Shopping",
            "Maps",
            "Videos",
            "Images"
        ],
        correct_answer: 0 // Shopping
    },
    {
        id: 77,
        type: "single_choice",
        question: "Toán tử tìm kiếm nào sẽ trả về kết quả cho một từ cụ thể hoặc các từ đồng nghĩa của nó?",
        options: [
            "Dấu ngã (~)",
            "Dấu trừ (-)",
            "Dấu cộng (+)",
            "Dấu ngoặc kép (\"\")"
        ],
        correct_answer: 0 // Dấu ngã (~)
    },
    {
        id: 78,
        type: "multiple_choice",
        question: "Một số tác động tâm lý và thể chất của việc sử dụng công nghệ kỹ thuật số là gì? (Chọn 3)",
        options: [
            "Cải thiện tầm nhìn",
            "Cải thiện thính giác",
            "Ngủ không ngon",
            "Sai tư thế",
            "Trầm cảm"
        ],
        // Đáp án: Ngủ không ngon, Sai tư thế, Trầm cảm
        correct_answer: [2, 3, 4]
    },
    {
        id: 79,
        type: "true_false_matrix",
        question: "Bạn đang cố gắng thiết kế một yêu cầu tìm kiếm hiệu quả. Bạn nhận ra rằng trước tiên bạn phải chọn đúng công cụ tìm kiếm. Chọn Đúng nếu công cụ tìm kiếm sẽ trả về kết quả mong muốn hoặc chọn Sai nếu không.",
        statements: [
            "Shazam có thể xác định tên của một bài hát",
            "TinEye có thể báo cáo lần xuất hiện đầu tiên của một hình ảnh trực tuyến",
            "Google xác minh các bài đăng tin tức giả mạo hoặc gây hiểu lầm",
            "Shodan cho phép bạn tìm kiếm TV thông minh, nhà máy điện, tủ lạnh hoặc bất kì loại thiết bị IoT nào được kết nối với Internet"
        ],
        correct_answer: {
            0: "Đúng",
            1: "Đúng",
            2: "Sai",
            3: "Đúng"
        }
    },
    {
        id: 80,
        type: "single_choice",
        question: "Biểu tượng nào mà một số trình duyệt Web hiển thị ở bên trái trường địa chỉ web để cho biết rằng một trang web an toàn?",
        options: [
            "Lightbulb",
            "Lock",
            "Key",
            "Bell"
        ],
        correct_answer: 1 // Lock
    },
    //OT3
    {
    id: 81, 
    type: "single_choice",
    question: "Khi tạo một tờ rơi quảng cáo doanh nghiệp, Natasha đã tìm thấy hình ảnh này trên creativecommons.org. Tại sao cô ấy không được phép sử dụng hình ảnh cho dự án của mình?",
    image: "images/gs6_lv3_ot3_cau1.jpg", // Link hình ảnh minh họa
    options: [
        "Hình ảnh không liệt kê điều kiện Creative Commons",
        "Hình ảnh liệt kê điều kiện Phi thương mại (NonCommercial)",
        "Hình ảnh yêu cầu Attribution",
        "Hình ảnh liệt kê điều kiện ShareAlike"
    ],
    correct_answer: 1 // Đáp án: Phi thương mại (NonCommercial)
    },
    {
    id: 82, // ID tiếp theo trong danh sách của thầy
    type: "multiple_choice",
    question: "Tùy chọn nào sau đây là lí do mà một tác giả có thể xuất bản thông tin mang tính thiên vị? (Chọn 2)",
    options: [
        "Họ là những kẻ nói dối",
        "Họ có thể nhận được các quyền lợi về tiền bạc hoặc địa vị",
        "Họ thích làm sai lệch sự thật",
        "Thông tin phù hợp nhất với niềm tin của họ"
    ],
    correct_answer: [1, 3] // Đáp án: Quyền lợi tiền bạc/địa vị và Phù hợp với niềm tin
    },
    {
    id: 83, // ID tiếp theo trong danh sách của thầy
    type: "true_false_matrix",
    question: "Bạn vừa tốt nghiệp chuyên ngành công nghệ thông tin và được nhận làm việc cho Phòng CNTT của một tập đoàn lớn. Làm thế nào bạn có thể cập nhật kiến thức kỹ thuật số của mình? Với mỗi phát biểu sau đây, hãy chọn Đúng nếu phát biểu giúp cập nhật kiến thức kỹ thuật số hoặc chọn Sai nếu không:",
    statements: [
        "Tình nguyện ngồi vào ban cố vấn của một tổ chức phi lợi nhuận",
        "Đọc nguồn cấp tin tức công nghệ hàng tuần liên quan đến lĩnh vực của bạn",
        "Nói chuyện với các đồng nghiệp có kinh nghiệm về các công nghệ mới"
    ],
    correct_answer: [
        "Sai",
        "Đúng",
        "Đúng"
    ]
    },
    {
    id: 84,
    type: "multiple_choice",
    question: "Khi tìm kiếm thông tin đáng tin cậy và chính xác trên mạng, người dùng nên cẩn trọng với những điều nào sau đây? (Chọn 2)",
    options: [
        "Các bài đăng trên mạng xã hội không trích dẫn nguồn của chúng",
        "Các bài báo trên Web đã được đánh giá bởi các học giả đáng tin cậy",
        "Ý kiến của bạn bè và thành viên gia đình được trình bày dưới dạng cơ sở lập luận",
        "Những trang Web có chú thích nguồn của thông tin",
        "Bài báo khoa học có thông tin rõ ràng về tác giả và lý lịch của họ"
    ],
    correct_answer: [0, 2] // Đáp án: Bài đăng MXH không trích nguồn và Ý kiến cá nhân gia đình/bạn bè
    },
    {
    id: 85,
    type: "single_choice",
    question: "Lý do nào sau đây có nhiều khả năng nhất khiến một số miền cấp cao nhất .edu hiển thị các thông tin sai lệch?",
    options: [
        "Họ thích xuyên tạc về sinh viên của họ",
        "Các nhà giáo dục của họ không đáng tin cậy",
        "Trường hướng tới mục tiêu tối đa hóa lợi nhuận cho các cổ đông",
        "Họ muốn thông tin sai lệch cho quần chúng"
    ],
    correct_answer: 2 // Đáp án: Trường hướng tới mục tiêu tối đa hóa lợi nhuận cho các cổ đông
    },
    {
    id: 86,
    type: "single_choice",
    question: "Tùy chọn nào sau đây được sử dụng để bảo vệ một sáng chế không bị sao chép?",
    options: [
        "Copyright",
        "Cloud storage",
        "Trademark",
        "Patent"
    ],
    correct_answer: 3 // Đáp án: Patent (Bằng sáng chế)
    },
    {
    id: 87,
    type: "single_choice",
    question: "Tùy chọn nào sau đây là một ví dụ về tài sản cá nhân?",
    options: [
        "Một tài liệu kỹ thuật được viết trên thiết bị của công ty",
        "Một Blog được viết cho một doanh nghiệp",
        "Hình ảnh từ một chuyến đi đường",
        "Một video được quay bằng Camera của công ty"
    ],
    correct_answer: 2 // Đáp án: Hình ảnh từ một chuyến đi đường
    },
    {
    id: 88,
    type: "true_false_matrix",
    question: "Bạn đã được giao một nhiệm vụ để xác thực quan điểm về kết quả tìm kiếm và tạo tác kỹ thuật số. Đối với mỗi phát biểu sau đây, hãy chọn Đúng hoặc Sai.",
    statements: [
        "Khuynh hướng cánh tả ủng hộ bình đẳng xã hội, chủ nghĩa tự do và các ý tưởng cách mạng",
        "Khuynh hướng cánh hữu ủng hộ doanh nghiệp tự do, quyền sở hữu tư nhân và các ý tưởng bảo thủ cho cộng đồng xã hội",
        "Những câu chuyện được đăng tải bởi một mạng truyền thông lớn luôn thể hiện cả hai mặt và một góc nhìn bình đẳng",
        "Tất cả các bài đăng trên Internet đều có góc nhìn trung lập"
    ],
    correct_answer: [
        "Đúng",
        "Đúng",
        "Sai",
        "Sai"
    ]
    },
    {
    id: 89,
    type: "single_choice",
    question: "Tài nguyên nào tốt nhất để một người sử dụng khi viết báo cáo về các hành tinh?",
    options: [
        "Một tạp chí khoa học",
        "Một bài đăng trên mạng xã hội",
        "Một tiểu thuyết hư cấu",
        "Một trang Blog"
    ],
    correct_answer: 0 // Đáp án: Một tạp chí khoa học
    },
    {
    id: 90,
    type: "multiple_choice",
    question: "Trích dẫn (Citation) trang Web thường bao gồm những gì? (Chọn 3)",
    options: [
        "Publication date",
        "Book title",
        "URL",
        "Website name",
        "Publisher"
    ],
    correct_answer: [0, 2, 3] // Đáp án: Ngày xuất bản, URL và Tên trang web
    },
    {
    id: 91,
    type: "single_choice",
    question: "Loại bản phát hành nào cho phép người dùng tận dụng hình ảnh của một cá nhân?",
    options: [
        "Location release",
        "Media release",
        "Marketing release",
        "Model release"
    ],
    correct_answer: 3 // Đáp án: Model release
    },
    {
    id: 92,
    type: "multiple_choice",
    question: "Các chủ doanh nghiệp nên cân nhắc làm gì để bảo vệ tài sản công ty của mình tốt nhất? (Chọn 2)",
    options: [
        "Một luật sư gian xảo",
        "Hiểu biết CPA",
        "Đăng ký tên doanh nghiệp, tên miền và sản phẩm của họ",
        "Một biểu mẫu không tiết lộ cho nhân viên và đối tác ký",
        "Bằng kinh doanh"
    ],
    correct_answer: [2, 3] // Đáp án: Đăng ký thương hiệu/tên miền và Ký cam kết bảo mật (NDA)
    },
    {
    id: 93,
    type: "single_choice",
    question: "Điều kiện nào của Creative Commons cho phép sao chép, phân phối, hiển thị hoặc trình diễn bản gốc của tác phẩm nhưng không thể thực hiện sửa đổi nếu không có sự cho phép của chủ sở hữu?",
    options: [
        "ShareAlike",
        "NonCommercial",
        "Attribution",
        "NoDerivatives"
    ],
    correct_answer: 3 // Đáp án: NoDerivatives (Không phái sinh)
    },
    {
    id: 94,
    type: "single_choice",
    question: "Để tránh bị đồng sở hữu tài sản trí tuệ, người dùng phải làm gì?",
    options: [
        "Đặt mật khẩu mạnh cho tất cả các máy tính liên quan đến lưu trữ nội dung",
        "Mã hóa dữ liệu để một chủ sở hữu chung mất quyền truy cập",
        "Thuê một chuyên gia CNTT để bảo vệ thông tin tài sản",
        "Xác định chỉ một người là chủ sở hữu và lập giấy tờ hợp pháp với luật sư"
    ],
    correct_answer: 3 // Đáp án: Xác định một người là chủ sở hữu và lập giấy tờ hợp pháp
    },
    {
    id: 95,
    type: "matching",
    question: "Bạn đang soạn một sơ đồ để đi kèm với một tập hợp các hướng dẫn. Tham khảo hình ảnh bên dưới và hoàn thành các câu hỏi bằng cách kéo từng khối hình từ cột bên phải sang chức năng của nó ở cột bên trái.",
    pairs: [
        { issue: "Các quy trình trong một sơ đồ", solution: "Hình chữ nhật (Rectangle)" },
        { issue: "Được sử dụng để biểu diễn Đầu vào (Input) hoặc Đầu ra (Output)", solution: "Hình bình hành (Parallelogram)" },
        { issue: "Đánh dấu phần đầu và phần cuối của một sơ đồ", solution: "Hình Oval" },
        { issue: "Một quyết định (Decision) như \"Có\" so với \"Không\" hoặc \"Đúng\" so với \"Sai\"", solution: "Hình thoi (Diamond)" }
    ],
    correct_answer: [
        0, 
        1, 
        2, 
        3] 
    // Thứ tự đúng tương ứng với các mô tả từ trên xuống dưới trong ảnh
    },
    {
    id: 96,
    type: "single_choice",
    question: "Lớp học lịch sử mà bạn đang tham gia một chuyến đi thực tế đến một viện bảo tàng. Một số bạn cùng lớp không thể tham dự. Giáo viên của bạn đã yêu cầu một tình nguyện viên phát trực tuyến trên Web về chuyến đi thực tế. Ứng dụng nào sau đây sẽ thích hợp để tạo Webcast?",
    options: [
        "Zoom",
        "Adobe InDesign",
        "Microsoft PowerPoint",
        "Google Chrome"
    ],
    correct_answer: 0 // Đáp án: Zoom
    },
    {
    id: 97,
    type: "single_choice",
    question: "Người dùng có thể tìm thấy các tùy chọn định dạng và in trên trang nào trong hộp thoại Word Options?",
    options: [
        "Language",
        "Proofing",
        "General",
        "Display"
    ],
    correct_answer: 3 // Đáp án: Display
    },
    {
    id: 98,
    type: "matching",
    question: "Xác định loại biểu đồ thích hợp với dữ liệu được mô tả. Hoàn thành các câu hỏi bằng cách chọn tùy chọn đúng với mỗi danh sách.",
    pairs: [
        { 
            issue: "__________ sẽ là cách tốt nhất để minh họa các mối quan hệ đơn giản từ một phần đến toàn bộ trong một tập dữ liệu nhỏ", 
            solution: "Pie Chart" 
        },
        { 
            issue: "Cho biết một hoặc nhiều chuỗi dữ liệu thay đổi như thế nào theo thời gian, bạn nên sử dụng __________", 
            solution: "Line Chart" 
        },
        { 
            issue: "Hiển thị khối lượng bán hàng của các sản phẩm khác nhau được minh họa tốt nhất bằng __________", 
            solution: "Column Chart" 
        }
    ],
    correct_answer: [0, 1, 2] 
    // Thứ tự đúng: Biểu đồ tròn (Pie) -> Biểu đồ đường (Line) -> Biểu đồ cột (Column)
    },
    {
    id: 99,
    type: "single_choice",
    question: "Trên thẻ Home trong Word, nhóm nào cho phép người dùng đặt giãn cách dòng mặc định?",
    options: [
        "Styles",
        "Paragraph",
        "Font",
        "Layout"
    ],
    correct_answer: 1 // Đáp án: Paragraph
    },
    {
    id: 100,
    type: "single_choice",
    question: "Phần mềm hỗ trợ nào sau đây cho phép người dùng thực hiện các chỉnh sửa và thay đổi nâng cao với hình ảnh?",
    options: [
        "Screencast",
        "Grammarly",
        "Text-to-speech",
        "Photoshop"
    ],
    correct_answer: 3 // Đáp án: Photoshop
    },
    {
    id: 101,
    type: "single_choice",
    question: "Thuật ngữ Readability là gì?",
    options: [
        "Văn bản tràn trang",
        "Phông chữ màu đỏ",
        "Kích thước phông chữ rất lớn để có thể nhìn rõ",
        "Chất lượng văn bản được rõ ràng hoặc có thể đọc được"
    ],
    correct_answer: 3 // Đáp án: Chất lượng văn bản được rõ ràng hoặc có thể đọc được
    },
    {
    id: 102,
    type: "single_choice",
    question: "Phần mềm tiện ích bổ sung nào sau đây có lợi cho người dùng gặp khó khăn với việc đọc hoặc bị suy giảm thị lực?",
    options: [
        "Text-to-speech",
        "Photoshop",
        "PowerPoint",
        "Audacity"
    ],
    correct_answer: 0 // Đáp án: Text-to-speech
    },
    {
    id: 103,
    type: "multiple_choice",
    question: "Bạn là trưởng nhóm thiết kế kỹ thuật số. Nhóm của bạn đang sáng tác một áp phích cho sự kiện gây quỹ tại địa phương. Bạn gửi bản dự thảo của áp phích cho khách hàng. Khách hàng muốn có một số thay đổi mà bạn và các thành viên trong nhóm tin rằng sẽ làm cho áp phích kém hấp dẫn và kém hiệu quả hơn. Bạn cần giao tiếp hiệu quả với khách hàng về những thay đổi trong thiết kế. Bạn nên thực hiện ba hành động nào? (Chọn 3)",
    options: [
        "Yêu cầu khách hàng giải thích lý do thay đổi và tác động của các thay đổi này đối với áp phích",
        "Nói với khách hàng rằng bạn không muốn thực hiện các thay đổi đó",
        "Nói chuyện với khách hàng rằng ý tưởng của họ không được hoan nghênh",
        "Nhắc nhở khách hàng rằng nhóm của bạn có kiến thức và kinh nghiệm để thiết kế nên một áp phích hoàn thiện hiệu quả",
        "Tạo mẫu áp phích theo những thay đổi của khách hàng và gửi cho họ",
        "Hướng cuộc thảo luận tập trung vào các lựa chọn thiết kế, thay vì phản ứng theo cảm xúc của bạn đối với những thay đổi của khách hàng"
    ],
    correct_answer: [0, 4, 5] // Đáp án: Yêu cầu giải thích, tạo mẫu thử và thảo luận chuyên môn
    },
    {
    id: 104,
    type: "multiple_choice",
    question: "Bạn đang chuẩn bị một bài thuyết trình về quá trình tăng dân số ở thành phố của bạn qua nhiều năm. Bạn cần thể hiện sự gia tăng dân số theo thời gian một cách hiệu quả. Tùy chọn nào sau đây là hình thức trình bày trực quan hiệu quả nhất? (Chọn 2)",
    options: [
        "Sơ đồ",
        "Biểu đồ tròn",
        "Biểu đồ thanh",
        "Biểu đồ đường"
    ],
    correct_answer: [2, 3] // Đáp án: Biểu đồ thanh và Biểu đồ đường
    },
    {
    id: 105,
    type: "single_choice",
    question: "Bạn đang sử dụng một chương trình mới lần đầu tiên. Bạn cần lưu lại công việc của mình. Dựa trên những tiêu chuẩn của phần mềm, bạn nên tìm tính năng Save trên menu nào sau đây?",
    options: [
        "Share",
        "Edit",
        "File",
        "Help File",
        "View"
    ],
    correct_answer: 2 // Đáp án: File
    },
    {
    id: 106,
    type: "multiple_choice",
    question: "Khi nói đến khả năng tiếp cận cho người dùng khiếm thị, tùy chọn nào sau đây cần được xem xét? (Chọn 3)",
    options: [
        "Màu sắc tương phản cao và thấp có thể khó đọc",
        "Màu neon sáng dễ đọc hơn",
        "Văn bản lớn dễ đọc nhất",
        "Sử dụng phông chữ hoặc biểu đồ có kết cấu rất khó đọc",
        "Nền trắng truyền thống với văn bản đen hoặc nền đen với văn bản trắng thường dễ đọc nhất"
    ],
    correct_answer: [0, 2, 4] // Đáp án: Màu tương phản thấp khó đọc, Văn bản lớn và Nền trắng/đen cơ bản
    },
    {
    id: 107,
    type: "single_choice",
    question: "Bạn cần thuyết trình một loạt hình ảnh và nội dung viết tay trong lớp lịch sử. Bạn nên sử dụng ứng dụng nào sau đây?",
    options: [
        "Google Slides",
        "Microsoft Excel",
        "Audacity",
        "Quicken"
    ],
    correct_answer: 0 // Đáp án: Google Slides
    },
    {
    id: 108,
    type: "single_choice",
    question: "Tên quy trình của máy tính để chuyển đổi hình ảnh hoặc cảnh quay thành dạng cuối cùng của nó là gì?",
    options: [
        "Rendering",
        "Rasterizing",
        "Initializing",
        "Computing"
    ],
    correct_answer: 0 // Đáp án: Rendering
    },
    {
    id: 109,
    type: "single_choice",
    question: "Bạn đang sử dụng ứng dụng Microsoft Word trên máy tính sử dụng hệ điều hành Windows 10 để viết bài về công ty. Tên công ty, ABusiness, bắt đầu với hai chữ cái in hoa. Mỗi khi bạn gõ tên công ty, phần mềm sẽ sửa các chữ in hoa. Bạn có thể thay đổi tuỳ chọn chỉnh sửa này ở đâu?",
    options: [
        "Trong AutoCorrect options",
        "Trong các tuỳ chọn hệ điều hành của máy tính",
        "Trong Language Preference của Office",
        "Trong cài đặt Grammar & Refinements"
    ],
    correct_answer: 0 // Đáp án: Trong AutoCorrect options
    },
    {
    id: 110,
    type: "single_choice",
    question: "Loại biểu đồ hoặc đồ thị nào được sử dụng để quan sát sự tương quan và phân bổ của dữ liệu?",
    options: [
        "Line graph",
        "Pie chart",
        "Scatter plot graph",
        "Table chart"
    ],
    correct_answer: 2 // Đáp án: Scatter plot graph (Biểu đồ phân tán)
    },
    {
    id: 111,
    type: "matching",
    question: "Bạn cần chọn một dự án để nói lên cách hiểu của mình về một cuốn tiểu thuyết mà bạn đọc cho lớp tiếng Anh. Nối từng ứng dụng với tác vụ thích hợp.",
    pairs: [
        { issue: "Thu âm một bản Podcast đánh giá cuốn tiểu thuyết", solution: "Audacity" },
        { issue: "Thiết kế một tấm áp phích cho cuốn tiểu thuyết", solution: "Adobe Photoshop" },
        { issue: "Tìm và sửa lỗi bài luận về cuốn tiểu thuyết", solution: "Grammarly" },
        { issue: "Gặp bạn cùng lớp trên mạng để thảo luận về cuốn tiểu thuyết", solution: "Microsoft Teams" }
    ],
    correct_answer: [0, 1, 2, 3] 
    // Thứ tự nối đúng: Podcast -> Audacity | Áp phích -> Photoshop | Sửa lỗi -> Grammarly | Họp mạng -> Teams
    },
    {
    id: 112,
    type: "single_choice",
    question: "Kích thước phông chữ nào được sử dụng phổ biến nhất cho các tiêu đề?",
    options: [
        "10-14 pts",
        "8-12 pts",
        "30-50 pts",
        "18-28 pts"
    ],
    correct_answer: 3 // Đáp án: 18-28 pts
    },
    {
    id: 113,
    type: "matching",
    question: "Bạn đang tạo một lưu đồ. Hãy nối từng mô tả kí hiệu với kí hiệu tương ứng.",
    image: "images/gs6_lv3_ot3_cau33.jpg", 
    pairs: [
        { issue: "Điểm cuối: Thể hiện điểm bắt đầu hoặc kết thúc quy trình", solution: "Hình Oval/Terminator" },
        { issue: "Quyết định: Thể hiện điểm quyết định giữa hai hoặc nhiều đường trong bảng", solution: "Hình thoi/Diamond" },
        { issue: "Độ trễ: Thể hiện độ trễ trong quy trình", solution: "Hình chữ nhật bo một đầu/Delay " },
        { issue: "Dữ liệu: Có thể trình bày bất kì loại dữ liệu nào trong một lưu đồ", solution: "Hình bình hành/Data" }
    ],
    correct_answer: [0, 1, 2, 3, 4] 
    // Thứ tự nối đúng dựa trên vị trí hình ảnh từ trên xuống dưới trong ảnh gốc
    },
    {
    id: 114,
    type: "single_choice",
    question: "Phiên bản phần mềm nào cho phép người dùng truy cập một ứng dụng qua Internet?",
    options: [
        "Diagnostic",
        "Wi-Fi",
        "Online",
        "Local"
    ],
    correct_answer: 2 // Đáp án: Online
    },
    {
    id: 115,
    type: "multiple_choice",
    question: "Bạn được giao nhiệm vụ thiết kế một trang Web nhằm đạt được các mục tiêu sau đây: \n• Giúp sinh viên dễ dàng điền thời gian xin nghỉ học \n• Cho phép sinh viên nêu lí do vắng mặt. \n• Hỗ trợ truy cập trang Web cho sinh viên có kết nối Internet chậm. \n• Bạn cần phải hoàn thành trang Web này trong hai tuần nữa. \nHai tiêu chí trang Web nào ràng buộc về thiết kế? (Chọn 2)",
    options: [
        "Trang Web cần đưa ra phương pháp để sinh viên chỉ ra lí do vắng mặt",
        "Bạn cần phải hoàn thành trang Web này trong hai tuần nữa",
        "Trang Web tải nhanh",
        "Trang Web phải dễ sử dụng"
    ],
    correct_answer: [0, 2] // Đáp án: Thời hạn hoàn thành (2 tuần) và Tốc độ tải (Internet chậm)
    },
    {
    id: 116,
    type: "true_false_matrix",
    question: "Bạn đang thêm văn bản thay thế (Alt Text) vào hình ảnh trên trang Web của mình. Với mỗi loại thông tin sau đây, hãy chọn Có nếu thấy cần thêm thông tin đó vào văn bản thay thế hoặc Không nếu không cần.",
    statements: [
        "Bản quyền hình ảnh",
        "Mô tả ngắn về hình ảnh",
        "Bối cảnh và chi tiết liên quan đến mục đích của hình ảnh"
    ],
    correct_answer: {
        0: "Không", // Bản quyền không đưa vào Alt Text
        1: "Có",    // Cần mô tả ngắn
        2: "Có"     // Cần bối cảnh/mục đích
    }
    },
    {
    id: 117,
    type: "multiple_choice",
    question: "Nếu một người dùng có nhiều dữ liệu để hiển thị thì ứng dụng nào là phù hợp nhất để họ sử dụng? (Chọn 2)",
    options: [
        "Access",
        "Teams",
        "PowerPoint",
        "Google Docs",
        "Excel"
    ],
    correct_answer: [0, 4] // Đáp án: Access và Excel
    },
    {
    id: 118,
    type: "multiple_choice",
    question: "Tùy chọn nào sau đây được biết đến với việc sử dụng phông chữ Serif? (Chọn 2)",
    options: [
        "Đề mục và tiêu đề (Heading and Title)",
        "Phương tiện truyền thông xã hội (Social Media)",
        "Sách (Book)",
        "Báo (Newspaper)"
    ],
    correct_answer: [2, 3] // Đáp án: Sách và Báo
    },
    {
    id: 119,
    type: "multiple_choice",
    question: "Bạn thiết kế một trang Web cho trường học để theo dõi sự tham gia của sinh viên vào các câu lạc bộ. Bạn tổ chức một buổi kiểm thử khả năng sử dụng để tìm hiểu xem sinh viên sử dụng trang Web thành thạo đến đâu. Bạn nên thực hiện hai hành động nào để đảm bảo nhận được dữ liệu kiểm thử chất lượng? (Chọn 2)",
    options: [
        "Lắng nghe sinh viên và ghi lại bất kỳ câu hỏi nào của họ về cách sử dụng trang Web",
        "Theo dõi các sinh viên sử dụng trang Web và lưu ý xem họ gặp vấn đề gì không",
        "Hướng dẫn sinh viên cách sử dụng trang Web",
        "Cho sinh viên biết lý do nhà trường yêu cầu bạn tạo trang Web"
    ],
    correct_answer: [0, 1] // Đáp án: Lắng nghe câu hỏi và Theo dõi hành vi người dùng
    },
    {
    id: 120,
    type: "single_choice",
    question: "Theo dõi các sinh viên sử dụng trang Web và lưu ý xem họ gặp vấn đề gì không. Đối tượng nào sau đây chủ yếu sử dụng văn bản thay thế (Alternative Text)?",
    options: [
        "Những người có trở ngại về lời nói",
        "Những người không biết đọc",
        "Người khiếm thị",
        "Người khiếm thính"
    ],
    correct_answer: 2 // Đáp án: Người khiếm thị
    },
    //OT4
    {
    id: 121,
    type: "single_choice",
    question: "Sử dụng ________ có thể giúp những người bị mù màu phân biệt giữa các thành phần biểu đồ khác nhau.",
    options: [
        "Numbers",
        "Small Text",
        "Textures",
        "Bright Colors"
    ],
    correct_answer: 2 // Đáp án: Textures (Kết cấu)
    },
    {
    id: 122,
    type: "multiple_choice",
    question: "Tùy chọn nào sau đây giúp chỉnh sửa video trên iPhone? (Chọn 3)",
    options: [
        "Viền (Edging)",
        "Thêm bộ lọc (Adding Filters)",
        "Điêu khắc (Sculpting)",
        "Cắt (Trimming)",
        "Điều chỉnh độ sáng (Adjusting Brightness)"
    ],
    correct_answer: [1, 3, 4] // Đáp án: Thêm bộ lọc, Cắt và Điều chỉnh độ sáng
    },
    {
    id: 123,
    type: "single_choice",
    question: "Câu hỏi nào tốt nhất để một người đặt ra khi xác định mục đích của dự án của họ?",
    options: [
        "Khách hàng phải trả bao nhiêu cho dự án?",
        "Các số liệu và thông tin nhân khẩu học (Demographics) của khán giả như thế nào?",
        "Bạn muốn người khác biết hoặc đạt được điều gì từ thông tin bạn chia sẻ?",
        "Bạn nên sử dụng cài đặt trước nào?"
    ],
    correct_answer: 2 // Đáp án: Mục tiêu truyền tải thông tin
    },
    {
        id: 124,
        type: "dropdown_matching",
        question: "Bạn đang tạo nội dung cho một trang Web. Bạn cần tuân thủ các tiêu chuẩn về khả năng tiếp cận. Hãy chọn các yêu cầu thiết kế tương ứng với giá trị phù hợp từ danh sách thả xuống.",
        statements: [
            "Kiểu phông chữ ưa chuộng",
            "Giữa màu chữ và màu nền cần duy trì",
            "Kích thước phông chữ tối thiểu cho văn bản nội dung"
        ],
        options: [
            "Sans-serif",
            "Độ tương phản cao",
            "11 point/15 pixel",
            "Serif", // Thầy có thể thêm các đáp án nhiễu vào đây nếu muốn
            "Độ tương phản thấp",
            "8 point/10 pixel",
            "24 point/32 pixel",
            "Sự tương đồng màu sắc",
            "Độ bão hòa thấp"
        ],
        correct_answer: {
            0: 0, // Dòng 1 (index 0) khớp với Sans-serif (index 0)
            1: 1, // Dòng 2 (index 1) khớp với Độ tương phản cao (index 1)
            2: 2  // Dòng 3 (index 2) khớp với 11 point/15 pixel (index 2)
        }
    },
    {
    id: 125,
    type: "multiple_choice",
    question: "Trường của bạn yêu cầu bạn thiết kế một trang Web để theo dõi việc tham gia vào các câu lạc bộ của sinh viên. Bạn tập hợp các thành viên trong nhóm của mình để đưa ra các ý tưởng để giải quyết vấn đề trên. Hành động nào sau đây sẽ có ích cho quá trình hình thành ý tưởng? (Chọn 2)",
    options: [
        "Chỉ chia sẻ những ý tưởng mà bạn cảm thấy rất tự tin",
        "Đặt giới hạn mỗi thành viên trong nhóm chỉ đưa ra một hoặc hai ý tưởng",
        "Khuyến khích các ý tưởng táo bạo",
        "Không chỉ trích các ý tưởng của những thành viên khác trong nhóm"
    ],
    correct_answer: [2, 3] // Đáp án: Khuyến khích ý tưởng táo bạo và Không chỉ trích
    },
    {
    id: 126,
    type: "true_false_matrix",
    question: "Bạn đang chuẩn bị chạy thử nghiệm trên Prototype của một trang Web mới. Với mỗi phát biểu, hãy chọn Đúng nếu đó là một mục tiêu/câu hỏi nghiên cứu tốt để thử nghiệm hoặc Sai nếu không phải:",
    statements: [
        "Tôi muốn kiểm tra việc điều hướng trong trang Web của mình",
        "Tôi muốn thử nghiệm Prototype của mình",
        "Tôi muốn kiểm tra xem người dùng có thể tìm thấy các sản phẩm cụ thể hay không",
        "Tôi muốn kiểm tra xem phiên bản Prototype nào mà người dùng thích"
    ],
    correct_answer: {
        0: "Đúng", // Kiểm tra tính điều hướng là mục tiêu cụ thể
        1: "Sai",   // Phát biểu quá chung chung, không phải mục tiêu nghiên cứu cụ thể
        2: "Đúng", // Kiểm tra khả năng tìm kiếm sản phẩm là mục tiêu cụ thể
        3: "Đúng"  // Kiểm tra sự ưu tiên của người dùng giữa các phiên bản là mục tiêu tốt
    }
    },
    {
    id: 127,
    type: "single_choice",
    question: "Trong tiết khoa học, bạn cần phân tích các bảng số liệu. Bạn nên sử dụng ứng dụng phần mềm nào sau đây?",
    options: [
        "Google Sheets",
        "Intuit QuickBooks",
        "Microsoft PowerPoint",
        "Adobe InDesign"
    ],
    correct_answer: 0 // Đáp án: Google Sheets
    },
    {
    id: 128,
    type: "matching",
    question: "Bạn hãy nối mỗi ứng dụng được liệt kê trong danh sách ở cột bên phải với loại nội dung tương ứng của nó ở cột bên trái.",
    pairs: [
        { issue: "Bạn thực hiện các thao tác trên một tập hợp dữ liệu lớn bằng cách sử dụng các công thức", solution: "Microsoft Excel" },
        { issue: "Bản trình chiếu trực quan, sinh động tự động chuyển tiếp từ chủ đề này sang chủ đề khác trên máy tính mà không cần bất cứ người nào điều khiển", solution: "Microsoft PowerPoint" },
        { issue: "Bản đề xuất dự án bao gồm nhiều trang với mục lục và các chỉ mục được tạo tự động", solution: "Microsoft Word" }
    ],
    correct_answer: [0, 1, 2] 
    // Thứ tự nối đúng: Dữ liệu lớn/Công thức -> Excel | Trình chiếu tự động -> PowerPoint | Đề xuất nhiều trang/Mục lục -> Word
    },
    {
    id: 129,
    type: "single_choice",
    question: "Bạn đã chụp bức ảnh sân trước của mình và có một con sóc cáu kỉnh đang ngồi trên bãi cỏ mà bạn muốn loại bỏ. Công cụ nào sau đây có thể giúp tự động loại bỏ con sóc và thay thế nhiều cỏ hơn trong bức ảnh?",
    options: [
        "Sử dụng Magic Wand",
        "Layer > New Fill Layer",
        "Sử dụng Spot Healing Brush"
    ],
    correct_answer: 2 // Đáp án: Spot Healing Brush
    },
    {
    id: 130,
    type: "multiple_choice",
    question: "Bạn đang chuẩn bị một bài thuyết trình về quá trình tăng dân số ở thành phố của bạn qua nhiều năm. Bạn cần trình bày hiệu quả sự gia tăng dân số theo thời gian. Hình thức hiển thị trực quan nào sau đây là hiệu quả nhất? (Chọn 2)",
    options: [
        "Biểu đồ tròn (Pie Chart)",
        "Biểu đồ dạng bản đồ (Map)",
        "Biểu đồ đường (Line Chart)",
        "Biểu đồ thanh (Bar Chart)"
    ],
    correct_answer: [2, 3] // Đáp án: Biểu đồ đường và Biểu đồ thanh
    },
    {
    id: 131,
    type: "matching",
    question: "Nối từng loại phương tiện kỹ thuật số trong danh sách ở cột bên phải tương ứng với mục tiêu giao tiếp kỹ thuật số trong danh sách ở cột bên trái.",
    pairs: [
        { issue: "Tạo một khóa học để mọi người có thể nghe trong lúc họ di chuyển", solution: "Âm thanh" },
        { issue: "Trình diễn vũ đạo mới cho đội múa của trường", solution: "Video" },
        { issue: "Công khai xác nhận chất lượng sản phẩm yêu thích của bạn", solution: "Mạng xã hội" }
    ],
    correct_answer: [0, 1, 2] 
    // Thứ tự nối đúng: Nghe khi di chuyển -> Âm thanh | Vũ đạo -> Video | Xác nhận sản phẩm -> Mạng xã hội
    },
    {
    id: 132,
    type: "true_false_matrix",
    question: "Bạn đang tạo một trang Web dễ dàng tiếp cận. Bạn cần xác định các tiêu chuẩn thực tiễn tốt nhất giúp người khiếm thị có thể truy cập trang Web. Với mỗi hành động thiết kế sau đây, hãy chọn Đúng nếu đó là một tiêu chuẩn thực tiễn tốt nhất. Ngược lại, hãy chọn Sai.",
    statements: [
        "Sử dụng màu sắc tương phản",
        "Sử dụng họa tiết (Texture) để thể hiện độ tương phản",
        "Sử dụng màu sắc để truyền tải thông tin",
        "Sử dụng bảng màu đơn sắc"
    ],
    correct_answer: {
        0: "Đúng",    // Độ tương phản giúp phân biệt nội dung rõ hơn
        1: "Đúng",    // Texture giúp nhận diện vùng dữ liệu không phụ thuộc màu sắc
        2: "Sai", // Không nên dùng duy nhất màu sắc để báo hiệu (người khiếm thị/mù màu sẽ không thấy)
        3: "Sai"  // Bảng màu đơn sắc làm giảm độ tương phản, gây khó khăn khi đọc
    }
    },
    {
    id: 133,
    type: "multiple_choice",
    question: "Tùy chọn nào sau đây là cách chỉnh sửa video được sử dụng để biến đổi video với mục đích thay đổi ý nghĩa gốc của nội dung? (Chọn 2)",
    options: [
        "Chỉnh sửa bằng cách ghép nhiều phần nhỏ của các video khác nhau lại với nhau",
        "Ghi công cho những người xuất hiện trong video và người quay phim trong phần cuối của video",
        "Ở cuối video, hiển thị các siêu liên kết đến các nguồn đáng tin cậy để ủng hộ, tăng thêm độ tin cậy cho thông điệp của video",
        "Hiển thị một đoạn clip tóm tắt của một đoạn video dài hơn"
    ],
    correct_answer: [0, 3] // Đáp án: Ghép nhiều phần nhỏ và Hiển thị đoạn clip tóm tắt
    },
    {
    id: 134,
    type: "matching",
    question: "Nối từng loại biểu đồ trong danh sách ở cột bên phải với mục tiêu hiển thị trực quan tương ứng của nó ở cột bên trái.",
    pairs: [
        { issue: "Cho thấy mối tương quan và sự phân bổ của một lượng lớn dữ liệu", solution: "Biểu đồ phân tán (Scatter Plot)" },
        { issue: "Hiển thị cách một hoặc nhiều chuỗi dữ liệu (Data series) thay đổi theo thời gian", solution: "Biểu đồ đường (Line Graph)" },
        { issue: "Minh họa các mối quan hệ từng phần (Part to whole relation) đơn giản trong một tập dữ liệu nhỏ", solution: "Biểu đồ tròn (Pie Chart)" }
    ],
    correct_answer: [0, 1, 2] 
    // Thứ tự nối đúng: Tương quan/Phân bổ -> Scatter Plot | Thay đổi theo thời gian -> Line Graph | Thành phần tổng thể -> Pie Chart
    },
    {
        id: 135,
        type: "ordering",
        question: "Bạn muốn tạo một ứng dụng trò chơi trên điện thoại di động. Thứ tự các bước để tạo một ứng dụng trò chơi là gì? Đặt các hành động theo đúng thứ tự.",
        options: [
            "Biến ý tưởng trò chơi của bạn thành một câu chuyện bằng cách trả lời các câu hỏi về nhân vật của bạn",
            "Lên kế hoạch để trò chơi trở nên hấp dẫn",
            "Thiết kế tác phẩm nghệ thuật tuyệt đẹp",
            "Chọn nền tảng ngôn ngữ lập trình để viết mã",
            "Chọn lập trình viên phù hợp",
            "Tích hợp chiến lược kiếm tiền"
        ],
        correct_answer: [
            "Biến ý tưởng trò chơi của bạn thành một câu chuyện bằng cách trả lời các câu hỏi về nhân vật của bạn",
            "Lên kế hoạch để trò chơi trở nên hấp dẫn",
            "Thiết kế tác phẩm nghệ thuật tuyệt đẹp",
            "Tích hợp chiến lược kiếm tiền",
            "Chọn nền tảng ngôn ngữ lập trình để viết mã",
            "Chọn lập trình viên phù hợp"
        ]
    },
    {
    id: 136,
    type: "multiple_choice",
    question: "Bạn đang bắt đầu mở một cửa hàng bánh tại nhà. Bạn lên kế hoạch tạo một trang Web để khách hàng có thể đặt các đơn hàng giao tận nơi và các đơn hàng đến cửa hàng để lấy. Lý do nào sau đây mà bạn nên tạo một bản mẫu (Prototype) cho biểu mẫu đặt hàng của mình? (Chọn 2)",
    options: [
        "Để tìm ra những sai sót trong thiết kế của bạn",
        "Để kiểm nghiệm xem giải pháp đó có hiệu quả hay không",
        "Để quảng cáo về cửa hàng của mình",
        "Để cho phép khách hàng đặt hàng trước khi bắt đầu ra mắt trang Web"
    ],
    correct_answer: [0, 1] // Đáp án: Tìm sai sót và Kiểm nghiệm giải pháp
    },
    {
    id: 137,
    type: "single_choice",
    question: "Các cá nhân nên làm gì để tạo ra một cộng đồng học tập và hiểu biết an toàn?",
    options: [
        "Gửi những thông điệp gây tổn thương cho những người không đồng ý về một chủ đề",
        "Chỉ giao tiếp với những người cùng chí hướng",
        "Bỏ qua các ý kiến khác nhau",
        "Lắng nghe ý kiến của người khác"
    ],
    correct_answer: 3 // Đáp án: Lắng nghe ý kiến của người khác
    },
    {
    id: 138,
    type: "multiple_choice",
    question: "Những cách nào sau đây để một công ty có thể chuyển tiếp thông tin kỹ thuật số đến khách hàng của họ? (Chọn 3)",
    options: [
        "Mail",
        "Email",
        "Instant Messaging",
        "Phone call",
        "Video Conferencing"
    ],
    correct_answer: [1, 2, 4] // Đáp án: Email, Instant Messaging và Video Conferencing
    },
    {
    id: 139,
    type: "multiple_choice",
    question: "Điều nào nên tránh trong giao tiếp chuyên nghiệp? (Chọn 3)",
    options: [
        "Đúng chính tả",
        "Biểu tượng cảm xúc",
        "Sử dụng phần mềm chuyển lời nói thành văn bản",
        "Các từ viết tắt",
        "Đúng ngữ pháp"
    ],
    correct_answer: [1, 2, 3] // Đáp án: Biểu tượng cảm xúc, Phần mềm chuyển lời nói, và Các từ viết tắt
    },
    {
    id: 140,
    type: "multiple_choice",
    question: "Bạn là thành viên của một nhóm sinh viên đang tạo một trang Web cho một tổ chức tình nguyện địa phương. Sau cuộc gặp lần gần đây nhất của bạn với khách hàng, khách hàng đã nói với giáo viên của bạn rằng nhóm của bạn cần cải thiện kỹ năng giao tiếp. Tùy chọn nào sau đây là hành động mà bạn có thể thực hiện để cải thiện kỹ năng giao tiếp của mình? (Chọn 2)",
    options: [
        "Để một thành viên khác trong nhóm tiếp quản việc giao tiếp trong cuộc họp tiếp theo",
        "Khi nói chuyện với khách hàng, hãy nói với giọng điệu tích cực, tôn trọng",
        "Nhắn tin cho khách hàng để xin lỗi vì kỹ năng giao tiếp kém",
        "Khi khách hàng đặt câu hỏi, hãy tóm tắt lại câu hỏi trước khi bạn trả lời"
    ],
    correct_answer: [1, 3] // Đáp án: Giọng điệu tích cực và Tóm tắt câu hỏi
    },
    {
    id: 141,
    type: "single_choice",
    question: "Một Resort trong rừng đã được đặt hết phòng cho kỳ nghỉ mùa thu, nhưng một tuần trước một vụ cháy rừng đã xảy ra trong khu vực, làm hư hại và đóng cửa con đường dẫn đến Resort. Cách nào sau đây là tốt nhất để Resort chuyển tin tức về thiệt hại do hỏa hoạn cho khách hàng?",
    options: [
        "Gửi một Email chi tiết",
        "Gửi tin nhắn văn bản ngắn gọn",
        "Tổ chức hội nghị truyền hình",
        "Gửi một lá thư"
    ],
    correct_answer: 0 // Đáp án: Gửi một Email chi tiết
    },
    {
    id: 142,
    type: "multiple_choice",
    question: "Em hãy cho biết, tùy chọn nào sau đây là ví dụ về phần mềm năng suất? (Chọn 2)",
    options: [
        "Google Workspace",
        "Apple Store",
        "Microsoft Office",
        "Google Play"
    ],
    correct_answer: [0, 2] // Đáp án: Google Workspace và Microsoft Office
    },
    {
    id: 143,
    type: "single_choice",
    question: "Người dùng nên tự hỏi điều gì về tin nhắn của họ trước khi nó được gửi đi?",
    options: [
        "Người nhận sẽ nhận thấy những từ sai chính tả?",
        "Người nhận có thể hiểu sai thông điệp không?",
        "Tin nhắn có hài hước không?",
        "Có bao nhiêu biểu tượng cảm xúc trong tin nhắn?"
    ],
    correct_answer: 1 // Đáp án: Người nhận có thể hiểu sai thông điệp không?
    },
    {
    id: 144,
    type: "true_false_matrix",
    question: "Bạn được yêu cầu xử lý những đánh giá không hài lòng và tức giận từ khách hàng trực tuyến. Bạn cần xác định cách tùy chỉnh tin nhắn để gửi đến những khách hàng này. Với mỗi tùy chỉnh sau đây, hãy chọn Đúng nếu bạn nên thực hiện tùy chỉnh này, ngược lại hãy chọn Sai.",
    statements: [
        "Đưa ra giải pháp cho các vấn đề mà khách hàng nêu lên",
        "Chỉ xin lỗi nếu khách hàng khiếu nại đúng",
        "Nói với những khách hàng không hài lòng rằng nhiều khách hàng khác đã đánh giá tích cực về công ty của bạn"
    ],
    correct_answer: {
        0: "Đúng", // Giải quyết vấn đề tận gốc là ưu tiên hàng đầu
        1: "Sai",   // Nên xin lỗi để xoa dịu cảm xúc khách hàng bất kể đúng sai
        2: "Sai"    // Đây là hành động mang tính đối đầu, không có tác dụng xoa dịu
    }
    },
    {
    id: 145,
    type: "multiple_choice",
    question: "Gần đây, lớp của bạn đã hoàn thành các dự án nhóm. Bạn đang chuẩn bị một bài thuyết trình về dự án của nhóm mình. Nhóm của bạn sẽ trình bày trực tiếp bài thuyết trình và sẽ được phát trực tiếp cho những người xem trực tuyến. Bạn cần đảm bảo rằng khán giả trực tuyến có thể xem và nghe được bài thuyết trình của bạn. Tùy chọn nào sau đây là hành động làm tăng mức độ tương tác của khán giả trong buổi thuyết trình? (Chọn 2)",
    options: [
        "Khuyến khích tham gia bằng các cuộc thăm dò ý kiến hoặc các câu hỏi yêu cầu những người tham gia cần sử dụng tính năng giơ tay ảo",
        "Để các thành viên trong nhóm lần lượt trình bày thông tin",
        "Đọc to, rõ ràng nội dung của từng trang chiếu trong bài thuyết trình",
        "Nói với giọng đều đều nhẹ nhàng"
    ],
    correct_answer: [0, 1] // Đáp án: Khuyến khích tham gia bằng giơ tay ảo/thăm dò và Lần lượt trình bày
    },
    {
    id: 146,
    type: "multiple_choice",
    question: "Trường học của bạn chuẩn bị tổ chức một hội chợ khoa học ảo. Bạn là đại sứ sinh viên hỗ trợ điều phối hội chợ khoa học này. Bạn muốn đảm bảo rằng những người học tiếng Anh tham dự hội chợ khoa học cảm thấy được chào đón và sẽ được thông báo đầy đủ về chương trình khoa học của trường. Tùy chọn nào sau đây là hành động mà bạn có thể thực hiện để đảm bảo những người tham dự hội chợ khoa học ảo sẽ cảm thấy được chào đón và được thông báo đầy đủ thông tin? (Chọn 2)",
    options: [
        "Ngoài việc sử dụng ngôn ngữ, bạn nên sử dụng cử chỉ và thành phần đồ họa trực quan để trình bày các dự án hội chợ khoa học, giúp những người xem hiểu thông điệp mà không phụ thuộc vào ngôn ngữ",
        "Sử dụng phần mềm để tạo và hiển thị phụ đề mở bằng ngôn ngữ của khán giả",
        "Yêu cầu các thành viên trong gia đình phiên dịch tại nhà trong khi các dự án được trình bày",
        "Trước tiên, trình bày các dự án hội chợ khoa học bằng tiếng Anh, sau đó trình bày dưới dạng văn bản sử dụng ngôn ngữ được sử dụng nhiều nhất"
    ],
    correct_answer: [0, 1] // Đáp án: Sử dụng đồ họa/cử chỉ và Hiển thị phụ đề đa ngôn ngữ
    },
    {
    id: 147,
    type: "true_false_matrix",
    question: "Bạn là sinh viên mới tốt nghiệp tại một trường đại học. Một trong những trách nhiệm của bạn là dạy kèm cho sinh viên đăng ký các khóa học giao tiếp kinh doanh năm thứ nhất. Kỳ thi giữa kỳ đang đến gần và bạn đang ôn tập các chủ đề với một nhóm 30 sinh viên. Bạn nhận thấy hầu hết các sinh viên đều nhầm lẫn về thông tin bạn đang trình bày. Bạn nhận ra rằng bạn phải tham gia với họ theo cách giúp mở rộng sự hiểu biết và học hỏi lẫn nhau. Đối với mỗi phát biểu, hãy chọn Đúng nếu mở rộng sự hiểu biết và học hỏi lẫn nhau hoặc chọn Sai nếu không.",
    statements: [
        "Phân tích các câu hỏi bài tập của sinh viên",
        "Xác định khu vực nhầm lẫn và giải thích theo cách khác",
        "Hỏi sinh viên xem họ có bất kỳ câu hỏi nào muốn hỏi hay không",
        "Xem lại tất cả các chủ đề một lần nữa",
        "Cung cấp tài liệu phát tay các thuật ngữ và định nghĩa kinh doanh cơ bản"
    ],
    correct_answer: {
        0: "Sai", // Giúp hiểu sâu vấn đề qua bài tập thực tế
        1: "Đúng", // Giải quyết trực tiếp điểm nghẽn bằng phương pháp mới
        2: "Đúng", // Khuyến khích tương tác và làm rõ thắc mắc cá nhân
        3: "Sai",   // Việc lặp lại y hệt nội dung cũ khi họ đã nhầm lẫn là không hiệu quả
        4: "Sai"  // Cung cấp công cụ hỗ trợ ghi nhớ và tra cứu nhanh
    }
    },
    {
    id: 148,
    type: "single_choice",
    question: "Khi trình bày trong môi trường ảo với khán giả, người dùng nên làm gì?",
    options: [
        "Bao gồm âm nhạc lớn trong bản trình chiếu",
        "Đọc to từng trang trình chiếu",
        "Khuyến khích tương tác từ khán giả",
        "Sử dụng GIF, biểu tượng cảm xúc và từ viết tắt trong bản trình chiếu"
    ],
    correct_answer: 2 // Đáp án: Khuyến khích tương tác từ khán giả
    },
    {
    id: 149,
    type: "multiple_choice",
    question: "Người ta có thể làm gì để hiểu rõ nhất và thu hút đối tượng mục tiêu của họ? (Chọn 2)",
    options: [
        "Xác định giá trị của họ",
        "Nghiên cứu các đối tượng khác",
        "Tìm hiểu về sở thích của họ",
        "Bán thông tin của họ cho người mua bên thứ ba",
        "Tìm hiểu về nhân khẩu học của họ"
    ],
    correct_answer: [2, 4] // Đáp án: Tìm hiểu về sở thích và Nhân khẩu học
    },
    {
    id: 150,
    type: "multiple_choice",
    question: "Những cách nào để xử lý các đánh giá tiêu cực trên trang Web của công ty hoặc trang truyền thông xã hội? (Chọn 2)",
    options: [
        "Nói với họ rằng họ có thể đưa doanh nghiệp của mình đi nơi khác",
        "Công khai tố cáo họ với tư cách là khách hàng",
        "Cung cấp cho họ thông tin liên hệ của công ty",
        "Đề nghị rằng tình huống tiêu cực là lỗi của họ",
        "Thừa nhận và xin lỗi về mối quan ngại được nêu trong bài đánh giá"
    ],
    correct_answer: [2, 4] // Đáp án: Cung cấp thông tin liên hệ và Thừa nhận/Xin lỗi
    },
    {
    id: 151,
    type: "single_choice",
    question: "Khi có điều gì đó không mong muốn phát sinh trong một công ty, tùy chọn nào nên được thực hiện trước khi liên hệ với các khách hàng bị ảnh hưởng?",
    options: [
        "Công ty nên hiểu vấn đề và xác định giải pháp cho vấn đề",
        "Công ty sẽ mất nhiều tháng để xác định giải pháp tốt nhất",
        "Không có gì; khách hàng có quyền biết nếu có vấn đề ngay lập tức",
        "Công ty nên quyết định chỉ nhắn tin hoặc gọi điện cho khách hàng"
    ],
    correct_answer: 0 // Đáp án: Hiểu vấn đề và xác định giải pháp
    },
    {
    id: 152,
    type: "true_false_matrix",
    question: "Với từng phát biểu về giao tiếp kỹ thuật số với khách hàng và đồng nghiệp, hãy chọn Đúng hoặc Sai.",
    statements: [
        "Tránh đề cập trực tiếp mục đích của tin nhắn",
        "Sử dụng các biểu tượng đánh dấu đầu dòng hoặc đánh số đầu dòng cho danh sách để sắp xếp chi tiết trong nội dung thư điện tử",
        "Sử dụng các từ viết tắt và chữ viết tắt trong tất cả các thư để đảm bảo ngắn gọn",
        "Khi bạn cần khách hàng lựa chọn, hãy cung cấp nhiều lựa chọn để giảm thiểu việc trao đổi qua lại"
    ],
    correct_answer: {
        0: "Sai",   // Nên đi thẳng vào vấn đề để tiết kiệm thời gian cho người đọc
        1: "Đúng", // Giúp thư điện tử rõ ràng, dễ theo dõi và chuyên nghiệp hơn
        2: "Sai",   // Viết tắt tùy tiện có thể gây hiểu lầm và thiếu trang trọng
        3: "Đúng"  // Giúp khách hàng dễ quyết định và tối ưu hóa quy trình làm việc
    }
    },
    {
    id: 153,
    type: "multiple_choice",
    question: "Tùy chọn nào sau đây có thể gây ra sự mơ hồ trong giao tiếp bằng văn bản? (Chọn 3)",
    options: [
        "Ngữ pháp kém",
        "Hướng dẫn rõ ràng",
        "Dấu câu kém",
        "Chính tả kém",
        "Những tín hiệu phi ngôn ngữ không thể phủ nhận"
    ],
    correct_answer: [0, 2, 3] // Đáp án: Ngữ pháp kém, Dấu câu kém và Chính tả kém
    },
    {
    id: 154,
    type: "single_choice",
    question: "Để mở rộng sự hiểu biết và học hỏi lẫn nhau, mọi người tham gia vào một cuộc trò chuyện phải đồng ý về một chủ đề.",
    options: [
        "Sai",
        "Đúng"
    ],
    correct_answer: 0 // Đáp án: Sai
    },
    {
    id: 155,
    type: "single_choice",
    question: "Đối tượng nào sau đây có thể hiểu rõ nhất về chữ viết tắt của Textspeak và GIF?",
    options: [
        "Trẻ nhỏ",
        "Thế hệ người cao tuổi",
        "Thanh niên hiểu biết về công nghệ",
        "Cá nhân không có điện thoại thông minh"
    ],
    correct_answer: 2 // Đáp án: Thanh niên hiểu biết về công nghệ
    },
    {
    id: 156,
    type: "single_choice",
    question: "Dây an toàn của người đàn ông bị hỏng khi anh ta đang đu dây qua một khu rừng. Anh ấy bị thương nặng và công ty vận động viên trượt ván cần thông báo cho người thân trong liên hệ khẩn cấp (Emergency Contact) của anh ta. Làm thế nào để đại diện công ty truyền đạt thông tin cho người liên hệ khẩn cấp của người đàn ông?",
    options: [
        "Đăng bài lên mạng xã hội (Social media post)",
        "Gửi thư điện tử (Email)",
        "Gọi điện thoại (Phone call)",
        "Gửi tin nhắn văn bản (Text message)"
    ],
    correct_answer: 2 // Đáp án: Gọi điện thoại (Phone call)
    },
    {
    id: 157,
    type: "single_choice",
    question: "Lớp khoa học của bạn đã được chia thành các đội. Mỗi đội phải xây dựng một bài thuyết trình trực tuyến cho một trường Tiểu học. Nhóm của bạn đã được chỉ định xây dựng một bài thuyết trình cho học sinh từ 5 đến 6 tuổi. Nhóm của bạn cần đảm bảo khán giả sẽ xem và nghe bài thuyết trình của bạn. Hành động nào sẽ giúp tăng mức độ tương tác của khán giả trong buổi thuyết trình của bạn?",
    options: [
        "Chỉ sử dụng hình ảnh trong bài thuyết trình của bạn mà không nói chuyện",
        "Đặt toàn bộ kịch bản cho bài thuyết trình của bạn trên các Slide để khán giả có thể đọc nó",
        "Đặt một hình ảnh trên mỗi trang chiếu. Giữ câu chuyện cho mỗi Slide thật ngắn gọn và thú vị",
        "Hỏi học sinh những gì họ muốn học, sau đó trình bày một cách ngẫu hứng"
    ],
    correct_answer: 2 // Đáp án: Một hình ảnh mỗi trang và câu chuyện ngắn gọn, thú vị
    },
    {
    id: 158,
    type: "true_false_matrix",
    question: "Phân tích các phát biểu sau về việc làm và cách thức việc làm liên quan đến việc sử dụng và quyền riêng tư trên mạng xã hội. Với mỗi phát biểu, hãy chọn Đúng hoặc Sai.",
    statements: [
        "Các công ty được phép giám sát các bài đăng trên mạng xã hội của bạn",
        "Bạn có thể bị sa thải vì những thông điệp đăng trên mạng xã hội vào thời gian rảnh",
        "Công ty có thể hạn chế những gì bạn đăng tải trên các tài khoản mạng xã hội cá nhân của mình"
    ],
    correct_answer: {
        0: "Đúng", // Công ty có quyền giám sát để bảo vệ uy tín và bảo mật thông tin
        1: "Đúng", // Các phát ngôn gây hại trên mạng xã hội có thể dẫn đến chấm dứt hợp đồng
        2: "Đúng"  // Thông qua các chính sách truyền thông xã hội (Social Media Policy)
    }
    },
    {
    id: 159,
    type: "single_choice",
    question: "Một nhân viên viết một thông điệp chính thức với định dạng chuyên nghiệp. Tin nhắn có nhiều khả năng sẽ được gửi cho ai nhất?",
    options: [
        "Một người bạn",
        "Một đồng nghiệp",
        "Cha mẹ",
        "Giám đốc điều hành (CEO)"
    ],
    correct_answer: 3 // Đáp án: Giám đốc điều hành (CEO)
    },
    {
    id: 160,
    type: "multiple_choice",
    question: "Người đại diện của công ty nên hành động như thế nào khi thông báo tin xấu cho khách hàng? (Chọn 3)",
    options: [
        "Không tức giận",
        "Cảm thông",
        "Nói lớn tiếng",
        "Trung thực"
    ],
    correct_answer: [0, 1, 3] // Đáp án: Không tức giận, Cảm thông và Trung thực
    },
    //OT5
    {
    id: 161,
    type: "single_choice",
    question: "Bạn KHÔNG thể gửi tập tin nào sau đây thông qua một nhà cung cấp Email tiêu chuẩn như Gmail hay Yahoo?",
    options: [
        "Tập tin văn bản thuần dài 400 trang",
        "Hình GIF động có độ phân giải 1080p với 30 khung hình",
        "Video dài 1 phút có độ phân giải 8K, định dạng AVI",
        "Podcast dài 5 phút có định dạng MP3"
    ],
    correct_answer: 2 // Đáp án: Video dài 1 phút có độ phân giải 8K, định dạng AVI
    },
    {
    id: 162,
    type: "true_false_matrix",
    question: "Bạn thấy bạn cùng lớp đăng một số nội dung đáng ngờ trên một trang mạng xã hội. Với mỗi loại nội dung, hãy chọn Đúng nếu bạn cần báo cáo cho cơ quan hành pháp hoặc Sai nếu không cần.",
    statements: [
        "Bản sao của bài kiểm tra lịch sử ngày mai",
        "Khiếu nại về một giáo viên cụ thể",
        "Đe dọa bạo lực đối với các thành viên trong câu lạc bộ của trường",
        "Một hình ảnh đáng xấu hổ của bạn cùng lớp"
    ],
    correct_answer: {
        0: "Sai", // Vi phạm nội quy trường học, báo cáo cho giáo viên/nhà trường
        1: "Sai", // Vấn đề nội bộ, nên giải quyết qua kênh góp ý của trường
        2: "Đúng",    // Đe dọa bạo lực là hành vi nguy hiểm, cần sự can thiệp của pháp luật
        3: "Đúng"  // Có thể là bắt nạt qua mạng, nên báo cáo cho quản trị viên mạng xã hội hoặc nhà trường
    }
    },
    {
    id: 163,
    type: "true_false_matrix",
    question: "Bạn là thành viên của một nhóm sinh viên họp trực tuyến vào mỗi buổi sáng. Một trong những thành viên trong nhóm luôn im lặng khi họp trực tuyến. Thành viên trầm lặng thực hiện tốt với kỹ năng công nghệ xuất sắc. Với từng phát biểu về cách thức tương tác với những thành viên nhút nhát hoặc hướng nội, hãy chọn Đúng hoặc Sai.",
    statements: [
        "Đưa email và tin nhắn vào kế hoạch công cụ liên lạc trong nhóm",
        "Tìm hiểu ý tưởng của người im lặng đó và đề nghị chia sẻ ý tưởng đó với cả nhóm",
        "Trong các cuộc họp trực tuyến, yêu cầu mọi người tắt tiếng, trừ người đang phát biểu",
        "Tránh nói về công việc của thành viên im lặng đó vì điều này gây sự chú ý không mong muốn"
    ],
    correct_answer: {
        0: "Đúng", // Tạo thêm kênh giao tiếp gián tiếp cho người hướng nội
        1: "Đúng", // Giúp họ thể hiện năng lực mà không gây áp lực trực diện
        2: "Đúng", // Giảm nhiễu và tạo không gian tập trung cho người nói
        3: "Sai"    // Vẫn cần công nhận đóng góp của họ một cách phù hợp
    }
    },
    {
    id: 164,
    type: "multiple_choice",
    question: "Ứng dụng nào có khả năng chia sẻ màn hình? (Chọn 3)",
    options: [
        "TeamViewer",
        "Outlook",
        "Skype",
        "Skyview",
        "Microsoft Teams"
    ],
    correct_answer: [0, 2, 4] // Đáp án: TeamViewer, Skype và Microsoft Teams
    },
    {
    id: 165,
    type: "single_choice",
    question: "Khi cộng tác trong một dự án, một nhóm có thể cần tạo dòng thời gian và theo dõi các nhiệm vụ được giao. Công cụ nào có tính năng quản lý lịch và công việc?",
    options: [
        "Outlook",
        "Word",
        "PowerPoint",
        "Excel"
    ],
    correct_answer: 0 // Đáp án: Outlook
    },
    {
    id: 168,
    type: "multiple_choice",
    question: "Đặc điểm của một thành viên nhóm có tinh thần xây dựng là gì? (Chọn 2)",
    options: [
        "Ngoan cố",
        "Cứng rắn",
        "Tò mò",
        "Tự tin"
    ],
    correct_answer: [2, 3] // Đáp án: Tò mò và Tự tin
    },
    {
    id: 169,
    type: "true_false_matrix",
    question: "Người sếp mới của bạn đã chỉ định bạn vào một nhóm dự án. Bạn muốn tạo ấn tượng tốt bằng cách đóng góp xây dựng cho nhóm. Đối với mỗi phát biểu, hãy chọn Đúng nếu đó là đóng góp mang tính xây dựng hoặc Sai nếu không phải:",
    statements: [
        "Yêu cầu nhóm xác minh hiểu biết của bạn về mục tiêu dự án và các bước để đạt được mục tiêu đó",
        "Hỏi sếp muốn bạn đóng góp như thế nào vào thành công của nhóm",
        "Lập tức lên tiếng và ngắt lời bất kì thành viên nào trong nhóm trình bày ý tưởng mà bạn không đồng ý",
        "Giải thích với nhóm rằng công việc, quyết định và nỗ lực của bạn sẽ không ảnh hưởng đến nhóm"
    ],
    correct_answer: {
        0: "Đúng", // Chủ động xác nhận mục tiêu để làm việc đúng hướng
        1: "Đúng", // Cầu thị và tìm hiểu rõ vai trò của mình trong nhóm
        2: "Sai",   // Hành vi thiếu tôn trọng, gây xung đột và cản trở thảo luận
        3: "Sai"    // Trong làm việc nhóm, mọi nỗ lực cá nhân đều có tác động dây chuyền
    }
    },
    {
    id: 170,
    type: "multiple_choice",
    question: "Bạn quản lý một nhóm dự án trong lớp thiết kế kỹ thuật số của mình. Bạn và các thành viên sẽ thực hiện dự án thiết kế cho một doanh nghiệp địa phương. Bạn sắp xếp một cuộc họp trực tuyến với chủ doanh nghiệp để thảo luận về dự án. Bạn cần đảm bảo rằng sau cuộc họp, chủ doanh nghiệp sẽ tự tin rằng nhóm của bạn có thể hoàn thành dự án thành công. Bạn nên thực hiện ba hành động nào? (Chọn 3)",
    options: [
        "Nói với khách hàng rằng bạn sẽ gửi email dự thảo đề xuất, bao gồm cả thời hạn",
        "Cùng khách hàng quyết định những hình thức giao tiếp số sẽ sử dụng trong dự án",
        "Nói theo cách bình thường, thân mật để khách hàng cảm thấy thoải mái và khuyến khích thảo luận",
        "Thảo luận về mục tiêu nghề nghiệp của bạn trong lĩnh vực thiết kế kỹ thuật số",
        "Thảo luận dài dòng về các ứng dụng thiết kế mà bạn sẽ sử dụng",
        "Sau khi khách hàng trình bày ý tưởng, hãy diễn giải lại những gì họ đã nói"
    ],
    correct_answer: [0, 1, 5] // Đáp án: Gửi email dự thảo, Thống nhất cách giao tiếp và Diễn giải lại ý tưởng
    },
    {
    id: 171,
    type: "multiple_choice",
    question: "Những cách nào mà công ty có thể đảm bảo rằng tất cả các thành viên trong nhóm đều đóng góp vào một cuộc họp hoặc dự án? (Chọn 3)",
    options: [
        "Đe dọa sa thải tất cả những người không đáp ứng thời hạn của họ",
        "Giao tiếp và đáp ứng các mục tiêu và thời hạn của dự án",
        "Thúc đẩy sự tôn trọng đối với tất cả các thành viên trong nhóm",
        "Tạo một môi trường an toàn",
        "Chỉ lắng nghe ý kiến của một số ít thành viên trong nhóm"
    ],
    correct_answer: [1, 2, 3] // Đáp án: Giao tiếp mục tiêu, Thúc đẩy tôn trọng và Tạo môi trường an toàn
    },
    {
    id: 172,
    type: "matching",
    question: "Ghép các bước trong chu trình quản lý dự án với mô tả của nó.",
    pairs: [
        { issue: "Các chi tiết của một dự án được thực hiện để tạo ra các sản phẩm dự án", solution: "Thực hiện (Execution)" },
        { issue: "Nhóm giao thành phẩm cho khách hàng và đánh giá dự án", solution: "Đóng (Close)" },
        { issue: "Người quản lý dự án quyết định có theo đuổi một dự án hay không", solution: "Khởi tạo (Initiation)" },
        { issue: "Người quản lý dự án xác định chi phí, phạm vi và khung thời gian của một dự án", solution: "Lập kế hoạch (Planning)" },
        { issue: "Người quản lý dự án xác định bất kì vấn đề hoặc rủi ro nào xuất hiện trong quá trình đăng kí thực thi", solution: "Giám sát (Monitoring)" }
    ],
    correct_answer: {
        0: 0, // Các chi tiết dự án -> Thực hiện
        1: 1, // Giao thành phẩm -> Đóng
        2: 2, // Quyết định theo đuổi -> Khởi tạo
        3: 3, // Xác định chi phí/phạm vi -> Lập kế hoạch
        4: 4 // Xác định vấn đề/rủi ro -> Giám sát
    }
    },
    {
    id: 173,
    type: "single_choice",
    question: "Có bao nhiêu bước trong chu trình quản lý dự án?",
    options: [
        "4",
        "8",
        "7",
        "5"
    ],
    correct_answer: 3 // Đáp án: 5 bước
    },
    {
    id: 174,
    type: "matching",
    question: "Một công ty đang làm việc cùng nhau để giải quyết một vấn đề không mong muốn ảnh hưởng đến nhiều khách hàng của mình. Họ đang sử dụng các công cụ kỹ thuật số để luôn có tổ chức và giao tiếp. Ghép công cụ hoặc phần mềm kỹ thuật số với cách sử dụng tốt nhất có thể của nó trong quá trình cộng tác.",
    pairs: [
        { issue: "Liệt kê thông tin liên hệ của khách hàng ngày liên hệ và thông tin hoàn tiền", solution: "Bảng tính Excel được đồng ủy quyền" },
        { issue: "Tạo dòng thời gian bằng cách sử dụng lịch và phân công và theo dõi nhiệm vụ", solution: "Outlook" },
        { issue: "Lưu trữ các bản cập nhật dự án và ghi chú cuộc họp", solution: "OneNote" },
        { issue: "Lưu trữ tập tin ảnh và video để sử dụng trên phương tiện truyền thông xã hội", solution: "Dropbox" }
    ],
    correct_answer: {
        0: 0, // Liệt kê/Hoàn tiền -> Excel
        1: 1, // Dòng thời gian/Lịch/Nhiệm vụ -> Outlook
        2: 2, // Ghi chú cuộc họp -> OneNote
        3: 3  // Lưu trữ ảnh/video -> Dropbox
    }
    },
    {
    id: 175,
    type: "single_choice",
    question: "Bạn đang cùng với các bạn học thực hiện một dự án nhóm. Chỉ còn ba ngày nữa là đến hạn phải hoàn thành cho phần công việc mà bạn phụ trách trong dự án. Bạn nhận thấy rằng, bạn cần thêm thời gian để hoàn thành phần công việc đó. Bạn có một cuộc họp trực tuyến với các bạn học vào ngày mai. Bạn nên làm gì?",
    options: [
        "Nói với cả nhóm rằng bạn đã phải đảm nhận quá nhiều việc",
        "Mô tả những phần việc bạn đã hoàn thành và yêu cầu các bạn khác hỗ trợ mình cho phần việc còn lại",
        "Chờ cho đến khi nào bạn đã hoàn thành phần việc của mình thì mới liên lạc với nhóm",
        "Giải thích tại sao bạn không đạt đúng tiến độ công việc"
    ],
    correct_answer: 1 // Đáp án: Mô tả phần đã làm và yêu cầu hỗ trợ
    },
    {
    id: 176,
    type: "single_choice",
    question: "Các công ty nên tạo một hoặc nhiều quy trình ________ được sử dụng để quản lý việc hoàn thành các dự án.",
    options: [
        "Có hạn (Finite)",
        "Vô nghĩa (Nonsensical)",
        "U mê (Obtuse)",
        "Theo chu kỳ (Cyclical)"
    ],
    correct_answer: 3 // Đáp án: Có hạn (Finite)
    },
    {
    id: 177,
    type: "multiple_choice",
    question: "Bạn là một trưởng nhóm. Nhóm của bạn đang làm việc trên môi trường ảo. Bạn cần xây dựng niềm tin và cách thức giao tiếp giữa các thành viên trong khi tham gia họp trực tuyến. Bạn nên thực hiện hành động nào? (Chọn 2)",
    options: [
        "Bắt đầu mỗi cuộc họp bằng cách điểm danh từng thành viên trong nhóm",
        "Không tuân thủ chương trình họp, để nhóm có thể thảo luận tự phát",
        "Cố làm người khác tôn trọng mình bằng cách che giấu các điểm yếu hoặc việc thiếu kiến thức của bản thân",
        "Yêu cầu các thành viên khác trong nhóm điều phối từng phân đoạn của cuộc họp"
    ],
    correct_answer: [0, 3] // Đáp án: Điểm danh thành viên và Yêu cầu thành viên điều phối
    },
    {
    id: 178,
    type: "multiple_choice",
    question: "Trường học của bạn chuẩn bị tổ chức một hội chợ khoa học ảo. Bạn là đại sứ sinh viên hỗ trợ điều phối hội chợ khoa học này. Bạn muốn đảm bảo rằng những người học tiếng Anh tham dự hội chợ khoa học cảm thấy được chào đón và sẽ được thông báo đầy đủ về chương trình khoa học của trường. Tùy chọn nào là hành động mà bạn có thể thực hiện để đảm bảo những người tham dự hội chợ khoa học cảm thấy được chào đón và được thông báo đầy đủ? (Chọn 2)",
    options: [
        "Yêu cầu các thành viên trong gia đình biên dịch tại nhà khi các dự án được trình bày",
        "Ngoài việc dùng ngôn ngữ, bạn dùng cử chỉ và hình ảnh để trình bày các dự án hội chợ khoa học, giúp người xem hiểu thông điệp",
        "Trình bày các dự án hội chợ khoa học bằng tiếng Anh trước, sau đó bằng ngôn ngữ được sử dụng nhiều nhất",
        "Sử dụng phần mềm để tạo và hiển thị phụ đề mở bằng ngôn ngữ của khán giả"
    ],
    correct_answer: [1, 3] // Đáp án: Dùng cử chỉ/hình ảnh và Sử dụng phần mềm hiển thị phụ đề
    },
    {
    id: 180,
    type: "true_false_matrix",
    question: "Bạn là thành viên của một nhóm dự án. Bạn cần đóng góp ý kiến mang tính xây dựng cho cả nhóm. Với từng phát biểu sau đây, hãy chọn Đúng nếu điều này giúp đóng góp ý kiến mang tính xây dựng hoặc chọn Sai nếu không phải.",
    statements: [
        "Hiểu mục tiêu cuối cùng của dự án và các bước để đạt được mục tiêu đó",
        "Hiểu rằng công việc, quyết định cũng như nỗ lực của bạn không ảnh hưởng đến nhóm",
        "Hiểu rõ vai trò của bạn và cách bạn có thể đóng góp tốt nhất vào thành công của cả nhóm",
        "Hiểu rằng bạn phải ngay lập tức lên tiếng và ngắt lời người đang trình bày ý kiến khi bạn không đồng ý với ý kiến đó"
    ],
    correct_answer: {
        0: "Đúng", // Nắm rõ mục tiêu là cơ sở để đưa ra ý kiến đúng hướng
        1: "Sai",   // Mọi nỗ lực cá nhân đều có tác động tương hỗ trong nhóm
        2: "Đúng", // Xác định đúng vị trí giúp tối ưu hóa hiệu quả đóng góp
        3: "Sai"    // Ngắt lời là hành vi thiếu chuyên nghiệp và cản trở thảo luận
    }
    },
    {
    id: 181,
    type: "single_choice",
    question: "Bạn bắt đầu kinh doanh nhỏ. Bạn và nhân viên của mình sẽ sử dụng bộ phần mềm cơ bản Microsoft Office để tăng năng suất làm việc. Bạn cần quyết định xem nên cài đặt các ứng dụng trên máy tính hay sử dụng phiên bản trực tuyến. Lợi ích của việc sử dụng ứng dụng trên máy tính so với sử dụng ứng dụng trên nền tảng điện toán đám mây là gì?",
    options: [
        "Chi phí trả trước thấp hơn",
        "Phần mềm sử dụng ít dung lượng lưu trữ của ổ đĩa cứng hơn",
        "Phần mềm không phụ thuộc vào kết nối internet",
        "Phần mềm được cập nhật thường xuyên hơn"
    ],
    correct_answer: 2 // Đáp án: Phần mềm không phụ thuộc vào kết nối internet
    },
    {
    id: 182,
    type: "true_false_matrix",
    question: "Nhóm của bạn đang phối hợp thực hiện một dự án nhóm trên môi trường ảo. Bạn muốn nhóm của mình và dự án thành công. Với từng phát biểu về các chiến lược để đạt được thành công cho nhóm làm việc trên môi trường ảo, hãy chọn Đúng hoặc Sai.",
    statements: [
        "Yêu cầu các thành viên trong nhóm thu thập thông tin trong sổ ghi chép OneNote",
        "Tăng hiệu quả bằng cách chỉ sử dụng giao tiếp không đồng bộ",
        "Tạo bảng thảo luận nhóm dành cho các cuộc trò chuyện liên quan đến dự án",
        "Có một vị trí lưu trữ tập tin trung tâm mà tất cả các thành viên trong nhóm đều có thể truy cập"
    ],
    correct_answer: {
        0: "Đúng", // OneNote giúp quản lý kiến thức tập trung và đồng bộ
        1: "Sai",   // Cần kết hợp cả giao tiếp đồng bộ và không đồng bộ để đạt hiệu quả cao nhất
        2: "Đúng", // Giúp tập trung luồng thảo luận, tránh trôi tin nhắn
        3: "Đúng"  // Đảm bảo mọi người luôn tiếp cận được phiên bản tệp mới nhất
    }
    },
    {
    id: 183,
    type: "multiple_choice",
    question: "Bạn là thành viên của một nhóm làm việc cùng nhau trong một dự án đầy thách thức. Nhóm họp trực tuyến một tuần/lần. Trong cuộc họp thứ hai, bạn thấy rằng hai trong số các thành viên của nhóm không quen sử dụng các tính năng của ứng dụng họp ảo. Tùy chọn nào sau đây là hành động hỗ trợ các thành viên trong nhóm của mình? (Chọn 2)",
    options: [
        "Khuyến khích mỗi thành viên trong nhóm tự luyện tập trước cuộc họp tiếp theo",
        "Gửi Email hướng dẫn từng bước sử dụng các tính năng của ứng dụng",
        "Nhắc nhở các thành viên trong nhóm rằng họ phải học cách sử dụng các tính năng",
        "Gửi liên kết đến video đào tạo về các tính năng cho các thành viên trong nhóm"
    ],
    correct_answer: [1, 3] // Đáp án: Gửi Email hướng dẫn và Gửi liên kết video đào tạo
    },
    {
    id: 184,
    type: "multiple_choice",
    question: "Bạn quản lý một nhóm dự án trong lớp thiết kế kỹ thuật số của mình. Bạn và các thành viên sẽ thực hiện dự án thiết kế cho một doanh nghiệp địa phương. Bạn sắp xếp một cuộc họp ảo trực tuyến với chủ doanh nghiệp để thảo luận về dự án. Bạn cần đảm bảo rằng sau cuộc họp, chủ doanh nghiệp sẽ tự tin rằng nhóm của bạn có thể hoàn thành dự án thành công. Bạn nên thực hiện hành động nào sau đây? (Chọn 3)",
    options: [
        "Thảo luận về các mục tiêu nghề nghiệp của bạn trong lĩnh vực thiết kế kỹ thuật số",
        "Nói với khách hàng rằng bạn sẽ gửi Email một bản đề xuất phác thảo bao gồm các thời hạn cuối cùng",
        "Cùng khách hàng quyết định những hình thức giao tiếp kỹ thuật số nào sẽ sử dụng trong suốt quá trình thực hiện dự án",
        "Sau khi khách hàng trình bày các ý tưởng, hãy diễn giải lại những gì họ đã nói",
        "Có một cuộc thảo luận dài về các ứng dụng thiết kế mà bạn sẽ sử dụng",
        "Nói theo cách bình thường, thân mật đặt khách hàng vào một cuộc thảo luận mang tính thoải mái và khích lệ"
    ],
    correct_answer: [1, 2, 3] // Đáp án: Gửi email đề xuất, Thống nhất cách giao tiếp và Diễn giải lại ý tưởng
    },
    {
    id: 185,
    type: "multiple_choice",
    question: "Những dấu hiệu tiềm ẩn của Virus là gì? (Chọn 3)",
    options: [
        "Máy tính hoạt động bình thường",
        "Các trang Web mong muốn tải lên nhanh chóng",
        "Ứng dụng thường xuyên gặp sự cố",
        "Có phần mềm không mong muốn được cài đặt trên máy tính",
        "Máy tính bắt đầu hoạt động rất chậm"
    ],
    correct_answer: [2, 3, 4] // Đáp án: Ứng dụng gặp sự cố, Phần mềm lạ xuất hiện và Máy tính chạy chậm
    },
    {
    id: 186,
    type: "multiple_choice",
    question: "Bạn nên quét Virus vì lí do nào? (Chọn 2)",
    options: [
        "Máy tính của bạn bắt đầu chạy chậm hơn bình thường",
        "Một chương trình bạn không khởi động mà tự vận hành",
        "Bạn nhận được một Email từ một cửa hàng trực tuyến sau khi đặt hàng ở đó",
        "Quảng cáo bật lên xuất hiện trên một trang Web"
    ],
    correct_answer: [0, 1] // Đáp án: Máy tính chạy chậm và Chương trình lạ tự vận hành
    },
    {
    id: 187,
    type: "true_false_matrix",
    question: "Bạn cần tối đa hóa quyền riêng tư trực tuyến của mình. Đối với mỗi hành động sau đây, hãy chọn Đúng nếu hành động giúp tăng quyền riêng tư trực tuyến, ngược lại, hãy chọn Sai.",
    statements: [
        "Duy trì đăng nhập vào các trang Web",
        "Xoá Cookie sau khi sử dụng trình duyệt Web",
        "Sử dụng cùng một thông tin đăng nhập cho nhiều tài khoản khác nhau",
        "Mở tất cả các Email để đảm bảo chúng không chứa phần mềm độc hại"
    ],
    correct_answer: {
        0: "Sai", // Duy trì đăng nhập làm tăng nguy cơ bị đánh cắp tài khoản nếu máy tính bị truy cập trái phép
        1: "Đúng",    // Xóa Cookie giúp loại bỏ các dấu vết theo dõi của bên thứ ba
        2: "Sai", // Sử dụng cùng mật khẩu là lỗi bảo mật nghiêm trọng (hiệu ứng domino)
        3: "Sai"  // Mở Email lạ là hành động nguy hiểm nhất vì dễ dính mã độc
    }
    },
    {
    id: 188,
    type: "true_false_matrix",
    question: "Với mỗi phương thức xác thực, hãy chọn Đúng nếu đó là một phần của phương thức xác thực đa yếu tố hoặc chọn Sai nếu không phải.",
    statements: [
        "Các dữ liệu sinh trắc học như dấu vân tay của bạn",
        "Mã bảo mật ở mặt sau thẻ tín dụng",
        "Mã PIN được khởi tạo qua SMS mà bạn nhận được bằng tin nhắn văn bản",
        "Thông báo CAPTCHA kiểm tra xem người dùng là người thật hay Robot"
    ],
    correct_answer: {
        0: "Đúng",    // Sinh trắc học là yếu tố "Thứ bạn là" (Something you are)
        1: "Sai", // CVV là một phần của thông tin thẻ, không phải lớp xác thực độc lập thứ hai
        2: "Đúng",    // SMS OTP là yếu tố "Thứ bạn có" (Something you have - điện thoại)
        3: "Sai"  // CAPTCHA là công cụ chống bot, không phải yếu tố xác thực danh tính người dùng
    }
    },
    {
    id: 189,
    type: "multiple_choice",
    question: "Hậu quả của việc đăng vị trí hiện tại của một người khi đang đi nghỉ dưỡng là gì? (Chọn 2)",
    options: [
        "Những người khác sẽ đi nghỉ dưỡng",
        "Những người khác sẽ nghĩ rằng người đăng bài đang ở nhà",
        "Những người khác sẽ biết rằng nhà của người đăng bài đang bỏ trống",
        "Những người khác sẽ biết vị trí của người đăng bài"
    ],
    correct_answer: [2, 3] // Đáp án: Biết nhà đang bỏ trống và Biết vị trí người đăng
    },
    {
    id: 190,
    type: "single_choice",
    question: "Nếu một người dùng thường xuyên sử dụng Internet, họ nên quét Virus trên máy tính của mình bao lâu một lần?",
    options: [
        "Hai đến ba lần mỗi tuần",
        "Ít khi",
        "Mỗi tháng một lần",
        "Mỗi ngày"
    ],
    correct_answer: 0 // Đáp án: Mỗi ngày
    },
    {
    id: 191,
    type: "matching",
    question: "Ghép các tùy chọn quét Virus trên máy tính sử dụng hệ điều hành Windows 10 với các chức năng tương ứng.",
    pairs: [
        { issue: "Tùy chọn quét được thiết kế để loại bỏ Virus và phần mềm độc hại khó bị phát hiện", solution: "Quét ngoại tuyến của Windows Defender (Windows Defender Offline Scan)" },
        { issue: "Quét nhanh để kiểm tra các thư mục nơi mà các Virus thường ẩn nấp", solution: "Quét nhanh (Quick scan)" },
        { issue: "Tùy chọn quét mà người dùng có thể chỉ định những tập tin và những vị trí mà họ muốn quét", solution: "Quét tùy chỉnh (Custom Scan)" },
        { issue: "Quét kỹ toàn bộ để kiểm tra tất cả các tập tin và chương trình đang chạy trên đĩa cứng", solution: "Quét toàn bộ (Full Scan)" }
    ],
    correct_answer: {
        0: 0, // Loại bỏ mã độc khó phát hiện -> Offline Scan
        1: 1, // Kiểm tra nơi virus thường ẩn nấp -> Quick scan
        2: 2, // Chỉ định tập tin/vị trí -> Custom Scan
        3: 3  // Kiểm tra tất cả tập tin/chương trình -> Full Scan
    }
    }
    // ... Bạn tiếp tục copy/paste cấu trúc này cho các câu từ 5 đến 188 nhé ...
];