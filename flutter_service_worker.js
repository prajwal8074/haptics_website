'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"manifest.json": "c8a9f2f18d34abca9d4e61e75860fac2",
"flutter_bootstrap.js": "9a837daaf621458f74548d27d1ed0cc9",
"index.html": "4f5eebc2480f3fcf5f31e319b83030c8",
"/": "4f5eebc2480f3fcf5f31e319b83030c8",
"assets/icon.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/index.html": "813d6f6e79f527bf8ac11722231c07e6",
"assets/assets/icon.png": "af602fac753018adebde715467cd1e6e",
"assets/assets/loading.gif": "3535083b72550a2a022dc0c5eafee975",
"assets/assets/s1.png": "dfff3a2c9aff59873c642500684fce6a",
"assets/assets/s3.png": "f0e29149e9a66e12d86b520a54952e6d",
"assets/assets/s4.png": "da7d7dfcda630836f0ad1a0662c7188d",
"assets/assets/logo_white.png": "5f39c6e9fff9e32c0e96d1f2e7e66bd7",
"assets/assets/logo_black.png": "a2d6ce2f4fc36a91a11a2f6abc9b6966",
"assets/assets/loading_dark.gif": "f8099c42ccdd6a8b70a0f2a870dda1c8",
"assets/assets/s2.png": "4ca1523a6e8c45e4ebd91ba8314d44a0",
"assets/AssetManifest.bin.json": "9ab092b9557043103e8ced02d5291138",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/AssetManifest.bin": "05daa3ff10d29593ce100bfaedb714be",
"assets/AssetManifest.json": "b3a68b0013633b05c7174b5e902cc568",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "a132ab0dd9d9218a21195cfcc0bb46eb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "79a437e8376c855e6db505373f754708",
"version.json": "3a9b034e25d019088a7f7faaef098d36",
".git/COMMIT_EDITMSG": "08c911ea3311151fac4fef223e86cb16",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "7aef804c3629120a1bb91c016550ac93",
".git/HEAD": "8ce7462ab4a392b6ebdf64c8d36ccbc2",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/logs/HEAD": "8921f4c9e3de3af39f8c2bc4b9c4981c",
".git/logs/refs/heads/html": "8921f4c9e3de3af39f8c2bc4b9c4981c",
".git/logs/refs/remotes/origin/html": "593c7d185a8312d1dcd06f6a75529636",
".git/index": "bcb9ebd8eccbbb3918192eb7269ed8ff",
".git/FETCH_HEAD": "9acc457ec9f749dba815f3c2358ab541",
".git/refs/heads/html": "2bf29c2a037c399d8830a65db17a0e9f",
".git/refs/remotes/origin/html": "2bf29c2a037c399d8830a65db17a0e9f",
".git/objects/09/78dbcff94abfcbb38e778547c2dfef1eb28aa7": "ce1b41f0900df3bf5c981c37c96339fb",
".git/objects/32/d5f472af6c0b3f0cd74559d7e98b2bd0ed4933": "9cdda66c19cf0872ea028e6f56c5be5c",
".git/objects/32/0a1abc7b8bbe12090f1a31a1babb746f634cd3": "df630e9cbf5508b052d16cf2963c85ba",
".git/objects/0a/fe07cec42517643af7ace8c1da45dfcf63e653": "2bd54027f1ce920533c9509f0c996796",
".git/objects/0a/2c067b75355aae29d3b936180df718471811dc": "03e5237b7309eab5170acc526dac8910",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/47/e52e9e4bc9c814caaa26658137de8b4daeff55": "65f7e2591e94008d62be7875a1ded83b",
".git/objects/47/fe4892f9bc05a9bacbd7d36375e823e96df733": "ef6fb13750215d919446ad3ae61ad97b",
".git/objects/79/a1a5217bf42e815aeebbd7ab62697c6f132dff": "bc07202f5722aa0b2dcda270eb22272e",
".git/objects/79/8e7710bb6357eeca4f5935c244e95d3862f022": "4d1c0785ff476b4e1e87fefbfae7bfdc",
".git/objects/c6/4c516bd0849362c8a2c39beb847a6d74b02b78": "36bbe94235c2bcd2de77ca461fb74466",
".git/objects/c6/968945237d0da6d49968f2ddc4710ad83ab434": "8c0ae16ebe23d1e03d8aa25971803e78",
".git/objects/c6/a27c5f846f13dd358f7571ea1a8bd77cb64e01": "a54178390ae4d29841b4d96bf15d6fb7",
".git/objects/86/7a1a7a1320adf173c516c766eee517fc6d8f47": "740c36228866d22613560b4b5f8eb984",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/73/730422cb63edf320999c3d8bf8111feaa24c1d": "5daf7ffa05a04255ae8bb9f1e182f23a",
".git/objects/ca/030bc943b766323ae75b281ec80c48742d255c": "d9f897cc0864958692becb1f927a5bf5",
".git/objects/a2/0ae5b1caeac9797d4943ed12c6e64f8cf33f85": "1648f61ddb9c917b545db84a2a3acdee",
".git/objects/a2/dc28fb3541594876fc50953b219b26a978075c": "97e8817f376a03a6f2a8b20fefdfe1c3",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/e21c74a271cee1b60d4723c12aff7fa0fb11ab": "d5b8c1e9de7307a58d52e57295b233ce",
".git/objects/00/7d89acf3bca89211b383938d860d84cdb423e4": "9c95ab755c1a6e0b05c4e815e27d85ea",
".git/objects/00/3d18c4917d850477706dac57967cee23086538": "e6ce43ad00b670fba8c7f8e0089968d8",
".git/objects/ab/9bd640722d3fc4eb7bccf7205bd159132f751a": "0fb6da543bd44457e44067c819ee67c7",
".git/objects/94/975852adeacf6e955c84bd5aa426f624d13435": "3f633649f28171c1564a648b62f29164",
".git/objects/57/3ac7a3d10e7ef84535042cee3e0e4c1a424c5c": "632d8c755bca39a234b4566145ec91bb",
".git/objects/ff/a258e09df5b511a5895b104ff58863a3ee06d2": "0e1acee65b1b271586cfe4e1c11630e1",
".git/objects/ff/5ebab7a3b47d3b251c2504c042b5453daa2a31": "283938273ce2de0fd62909bdd4e44aed",
".git/objects/2b/5f39da037a623fc544ef8ff8cebe0be726a7d0": "67be779fbabebdaa73fa9549dd8ab309",
".git/objects/82/02aee2a50912c742ee4505aad28bec5d8c1c4f": "690168e5b6be38342b10b276712c8239",
".git/objects/db/6917c05028930368b57c86e057eea1d7f6014e": "7e77c4d89dbbff497b83e8463a5c06bf",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/430c4d8d9f97dad4271ec15e19ac8c514acc23": "030b9fca927574c25e0e75c6e086abe1",
".git/objects/13/9473249ae8040324f79f4c0fc78383e26e1cdf": "d88cc7ea9e11ed5d3306182c249e4f8f",
".git/objects/c7/5ae41ac84aaf24175fe7591c20fa2b91d55216": "41ace743601ab5ca1e56f8ea80541c55",
".git/objects/4b/288a6d4f16560388d6c3148a273a67487efd2f": "8caea00e8f1f6cb88f671379cddaf4bd",
".git/objects/4b/cb332fe048da2ad3a91bd52f8090aa177f6fa2": "0a2d38a83c3636a5585fe2fbb5c1bccb",
".git/objects/d4/ffb441ad703107e1c44d62fdde990818ea15c9": "a32b376d356992167a776ad80666dbe7",
".git/objects/96/689e6f76c98e9c253ad1f288667d178a5d2c2d": "efd87a14710bfa0131a0604e4d9b116f",
".git/objects/96/2a29e0584bcbeed22bf38a6f6a67cd4eed5a2a": "9774b7c635812b5f7067628ebe90a297",
".git/objects/65/bdfd5216ba28624b82df6a773a2da440211a72": "578b78407d9827ac7fe89f1132fd78d0",
".git/objects/65/eb83fab31c885aa37074413f2527377b74b42b": "ea224ae4b79058bf3328ae37ae52629b",
".git/objects/04/129160c5a0c92a399bb73c374a353093fca7f6": "7513f742969a3f558ddc5f4f07159400",
".git/objects/99/a4bd9b4c4fc2a5fb970b323650aebeca839246": "1db6c53f8695a30179c6c273f365f656",
".git/objects/72/6d4181d99e3c4ef5f6e6a32463b03279044361": "ca34fe8e2f145c0b82126a806af42ea1",
".git/objects/78/31fc928412430853dad9209cca7136a79c48a1": "969ea40fae0404fcb89522322a66d3e1",
".git/objects/aa/500380ea1516eb6a5c0353120ea460b1a402a6": "fbafb69d8ca65cab369cf9b007c6382c",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dc/bba4e1b0026faf02210b022bf2f37aca1b068f": "9726911db606f2cec02039c345f06ecf",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/64/2a09f8d5f13dd79b522c3a51baf52094c1bbfb": "afe8c8cbd7d976ec307af5c376b3e907",
".git/objects/5f/ff790727fbc8e1ad3110c54590fa6ffb489c03": "cb842270d37d61c7dbd127244b952acd",
".git/objects/5f/9c0d95712a4ff3c63a8f992fc5e15ce1db3a63": "dac28377533492b23bd3fa0eb405d66a",
".git/objects/2a/34936bdc4cb88468791f9c8486110067e6c875": "a3da597893aca507742f2a57cbc64af9",
".git/objects/ea/710abb95bce0d9783e3160cccfdb3109eb34b7": "24c0be092b9c9c3e13da16250ff984c2",
".git/objects/cd/8c421a05f2d99eaa8bc1d818e7e956fc42a961": "0a0bfaf01a4677941fb323afb42a1450",
".git/objects/d2/c9ba353a56b3a1078be40a5a7825d988dcf0a8": "1330b938a4e4aeb3e55d45e541d4f32d",
".git/objects/b1/4d8b9e4a638564871ca5821c40032ddb4462f0": "cd41336cbfa5bb9755f8707d4cbc116a",
".git/objects/63/1b6f5dd9a7ca329d2687fcd95ddbd23b443550": "3a2532c208897add6e326e5d09800c19",
".git/objects/df/824fa3b12bdcde0fd53c0fb342e2ea5d0cfb89": "90870a14c2bf46674a877e5a0b009402",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/c5/9ab9346e83a830e7a41df274c580bc74a3faef": "5566da61965b13875a783d0804a77b8a",
".git/objects/bd/053557214cbc11e8547880ba65d482d4a3bdf1": "94f25fae6ea8c6263371c28bae801881",
".git/objects/74/ad83973d214f3e17caab4bea1d78e3ee6bd500": "52495c7878eaeabebe4601e2b81b93d3",
".git/objects/15/4b29ffc147b7b9daa36fad35834117a6a991ce": "dc66a2b004536a918b1019823e074973",
".git/objects/e1/c6b4597962a826ebdfa6b7823b8eaa90faa4d1": "81ee09c5400a9e1e9a22c324480a123b",
".git/objects/58/ea2e274523cce9f3bc9c5084b8baf9cb32a564": "51ec5776d1eed40a0bd8286f714790fc",
".git/objects/e2/d5e2d4e0ac32aa87ff91a6cbe8d83478767f1d": "0a59aa2f40cb2226eef32a5b3b5e874b",
".git/objects/e2/d4d71d81591e8b83089489493b6764d20217ef": "e7c14c8c0e7715411d8ef2eb58f13d10",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/35/e53508d0feb2efec3dbfb56c042922f5525e41": "aabc8f2bd8ac6eb4c88437f1f0c06419",
".git/objects/35/080f9fa301c85b7f92d7eeb2440c7869423b73": "1eac76a8fed5903578701e1c29c8d767",
".git/objects/b5/642f53e994e5021a6efcee848b9187b6c4f7e2": "ea785bdc18dd9164e1ef18032ec92ce4",
".git/objects/b5/a9f1b12fefb3aa1e4a32bafe72916783663fdc": "2f7d833b98effc7c4f71eba44adb5e57",
".git/objects/66/a7455d05509c6de307ffb1981e1af2dc59fdd0": "1db98f4c66cc1ebedc1d7e3c868293bc",
".git/objects/66/86e6a60c8927cf049011eebd8d06f2f8546dc4": "da4fc56edcf338ba1dea5791b323104f",
".git/objects/66/43aa2c3feadfde5837306c3fa9459635f2af9a": "2f2a017e24b78ca1e0dbb53407dfa006",
".git/objects/1d/26a44fa37af832e330a9828e7c82a32e80698a": "c1bcec7604046f5e54cf9919f397e62b",
".git/objects/7d/89b4a040333fbd80a2b911776f928ee9e29ffa": "21e14f190206e8a981a7f68671180005",
".git/objects/0e/e9a9d88868330e489a11f6b7f212d5a7233de0": "97a588aad45d79b08bf8b7fd45ef3712",
".git/objects/c9/ebd842cb4ec9721447d543e44b5d1b945c817a": "f93bd40830b6162b6c69cdcbdaa97479",
".git/objects/3c/63bf2fbeaa1f3077f58b239e132f0093a53ac1": "b94d9836c24e8d18a97fa2a0d8f232a8",
".git/objects/ba/2c22ce66b86e1310d44087bb3e23175695247a": "43651fc23efec48b323bbab6a2d650cc",
".git/objects/ba/32a6f466d40b49049258b61dfe66e3c6f514e4": "66a7929a1f604bd8d1709bd0b0ee3842",
".git/objects/1c/c5bb6f030786b87e251df51dd1a63a537e28c9": "5ee85956639729310f03008869864677",
".git/objects/1c/f6c309753b466db25f1bd296ed6c38cc60b1b4": "0770d881d6611a4f8894b1db180ce337",
".git/objects/pack/pack-ad0df3a5cbba0781e735e0f92811580d95bad2ba.idx": "f4b2fdf909ca41a522d15bfa8f9f4ed4",
".git/objects/pack/pack-ad0df3a5cbba0781e735e0f92811580d95bad2ba.pack": "1bf81c2469c5ab7f2b4a738fe19515c6",
".git/objects/pack/pack-ad0df3a5cbba0781e735e0f92811580d95bad2ba.rev": "d77e9af237a56337ee7e66f00854cf9b",
".git/objects/de/17ea6fb1f3b9d02f8cfc0518d033f651a620e5": "cca311eaa329919cb6932c53b2637cdf",
".git/objects/6e/146577fb2f57239818078f8f488fd2fd126da8": "100265782229dace6ad4b2f2ddffa37d",
".git/objects/6e/1077db3303d9ce1aef787dc9500075fe47f189": "cb6b78ac9a472c9a2536d736f423f17a",
".git/objects/ee/dea8a7c79c6082b06abc28d0db550c4d9f35e5": "65721f1649f2467d95727540f3dfcd96",
".git/objects/2f/022ea7fab44720439de1bbac87e583b1f398d7": "cbd4cdd91eeffb5d454e03dfd07d60cf",
".git/objects/e8/81001e2fada88e339d8243a94260fdb3524001": "0edf9130e0bfac9f57b33d1a926c465a",
".git/objects/a0/070805d67270f295f8d5ead945a5d45c272df6": "a02c122f62debc773a0fa721f8907967",
".git/objects/eb/7240634200df4a261a32916d8805971ec2c6f9": "2cb8f68f66ccbf96d7451a4294842549",
".git/objects/44/c20126352a7ac06cd11b2394ab0ee6185ae391": "79e5c3ba4492c94d01bc6d21be442a7a",
".git/objects/90/89542d7fd016aecbe20c37ede6a76045e99988": "6bab6f3a7e3fb0447438f98c30ea5027",
".git/objects/90/e916ead8d7428c9d08ede0af268514b83a2727": "32d160d1f152e73d014961fcd0333e91",
".git/objects/84/370a8bb960a6a1a7d6ae1603e06ca70fd58d63": "4f395f32f4b21d95e8a271e0d0ea6b02",
".git/objects/f7/c40f8634366f2fe5836a9daf017cb2ffafff64": "4b7c095a13d26bd66c9e3a4bea020d0f",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/ad/a22f0714a87c313b67b76bc02ed09691922733": "ee6306ab33d2410b704903c29d91243a",
".git/objects/d8/7c2f6d0ee00ff1f87b796874c30daa3b925b77": "a2c49310c3b3c04b54d1544772aef18f",
".git/objects/ec/b9ff01c583e41f792d65709f420577edb316a3": "7e9dfb7e40bc0e793caed2823f0a09b1",
".git/objects/a3/936754c51ad29205f503efe077e1aaea4e2279": "f6d3e03e00b667346be48beff51546d4",
".git/objects/a3/e815dcb77de284e4542d29b32a2f1be5b19528": "2bdd2d279c2e3a7a137e58ea3ca57ae9",
".git/objects/a3/1991ff845e4a6d1f19f19e352d429ddc990485": "18564ad7b123e13961bf03a89bba6434",
".git/objects/1b/7a1d46f8dba0de46928c8e3faf24bfda17ddb5": "fa38bc02ce8770ee2a9b90e6b645115f",
".git/objects/07/3032ab31fbf8cd99339766a57c5c7f27887025": "df0047dac4bb8df66213ee521552a325",
".git/objects/33/53ecff05d0eaff49f39462d63f565d730808a3": "ac428230f6593435fa60366c114a53ff",
".git/objects/33/5139eda387b9736cea10dcbffbcf7f738010c2": "a016bb4fdfe0a24b05e1161bc95b86b6",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/6d/7e845539a881082d29a38093169a91a06866a9": "36721bf64bca87ae5ea41a38ffcac45a",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/941f762bd08b8b31e7faa80215fef98ee41417": "a8159c093c3575487e167b5e5b09b88b",
".git/objects/f5/3c24ac70101a9f5d5bbb7e0e8e1803667b3ca2": "f70a8de2e61a3054def432be032afd0e",
".git/objects/83/e6d498de9efc5f1a9b1d2c869a34b2e1666310": "58a63b9a2126f39da6bbbf60153405b3",
".git/objects/e5/cc6900082125f6bf98716d2ab936cc69450c2f": "3059aef6ca648f6c727534d9e21e2ce8",
".git/objects/22/0f1379db5b5baca82038d13547c2a49a2d1caa": "72d90072aac53e33da7197c81ddd0283",
".git/objects/14/0767a20b629dd3ea323d180259d1220e382d5b": "aa22381abc593cf85e670f00ebecc77d",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/9d/55fbd9bc199fd5f717f01c9b9f5b8878ece979": "78d16438b32f9fe07cb12b1be4b21617",
".git/objects/cb/2506581a3b6876bb8894b920aa5b1467e2f4f2": "45ad1f87139f577652779eee4fa0bcf3",
".git/objects/cb/9d6b0f304a473092d19dd0096937bb1477fe5a": "fa84ea11beadb41f6639e555410c969c",
".git/objects/cc/dfb210fa00c68c42c25c967824e85d6717026a": "9c56d3b72d65dd734fc53884e974c882",
".git/objects/41/2bbdbfae7f37c24a4b93ddd0cce3f1a4333c13": "e1531c520ac0cb19e68968f2625a2610",
".git/objects/41/f777566687a4bd94382ee74a9fa89e271818e6": "06810fb8f237b9f84f56fe1d26ffa0b4",
".git/objects/9f/8e9b69a33f4e8067d5b21661a35d8856758aba": "9393dbd0376652d2e8bae438a1bf5cc7",
".git/objects/9f/488326bb6d56cf174367ff5413f96d0fe2ace3": "a63f36dce62f873acf9e7627c07228ce",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/ff2085f26b1a60eb073d97d6e24463221468d8": "f6decf9c30d2a653491c74da34d020bf",
".git/objects/5d/f3b351ae1764c6a70dc02aec8e52075f377655": "31d4d809c36c64a3d38a36ef34bfa768",
".git/objects/b2/bd9d684f27171e28963b3cea855379762b3f04": "188b56e2c30f1a227791a4aab6b18c23",
".git/objects/60/7a3d0727e004e5deceb7065bcdd8abcb5ca8af": "c9800390428b35d9b26d7bfaa34efa6d",
".git/objects/60/f550527e99251006a178859a3cfb4240a6b12f": "cc7a8f560c517018ee9bb4fb09691afd",
".git/objects/75/f5377ad29094a3747e8373c0bf79ea62395080": "be98b60ab670b39b72050199305f4d66",
".git/objects/af/10d515b9e7b36c9134917241b30aeaca3f7b27": "c60516bdf336b5f8706fe33135d6b081",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4c/34719d9b9910c859ed8170d6a7e90cc641f3c9": "372d50961f5e332cb3a4afc3c8c0335a",
".git/objects/ed/8c6d884d6bb21fd150141b68cd44bca3231c5e": "c37f497215ed813783ac8ef7fcb5cf6e",
".git/objects/d0/a65f85d510d89fb535fa22752db26abfc12e7f": "3444981ed787a4251104d6406e6e92b8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/bf/ecab41e1a851789d02256a8afa3d5f2db93cd6": "263352b98215fea17b46b2f61352ea7f",
".git/objects/11/a88c50ceecb657259b10fa212ed83b9dc4fb68": "3800f3538411fb6e366dfa87a1f22cbd",
".git/objects/3a/3f9da2cd835dbe9e61984cc8f3b212f59c0bef": "792999311c1711d00f4b59bdb4f712c8",
".git/objects/a6/856ddbd35fd1f9a16eebaeed53933bf3005c94": "979ac042a561b04aeff694157e4bdeff",
".git/objects/1f/7dfda551ea86e3eddc6f0f3cae7cab75dd774c": "72dcfc5633bd884f6a68844aa3408505",
".git/objects/4e/7bf6d40ebd0b6160ca7685cc372110d0bc6717": "f4f59aa62705844c69500e89da7aa3f0",
".git/objects/89/ac6b1ad0df1260994abf9c8b02b877285dc72d": "c7188863df6234e376f85ca218537fef",
".git/objects/89/66ac2e48d03859e518789e5664c7579d43e76a": "4d0cd1fade7dbe4a81c9debd6d235b88",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/ORIG_HEAD": "33fca03d9e73f8039897b319aa98c8c9",
"_config.yml": "c5e7b153577eb19852128122ec9bec68",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"splash/img/branding-2x.gif": "24819cf5b9dfc2795af613a6dbc4a80f",
"splash/img/light-3x.png": "5dc79a87f952f7e2a939b1d98677d620",
"splash/img/branding-dark-1x.gif": "0ea4586bdf56de7ae98dc9121f874ae3",
"splash/img/light-2x.png": "8e12c77260fbd79d5cd7ca24097293de",
"splash/img/branding-dark-2x.gif": "47f794868eb13cf9b022e397db94552f",
"splash/img/branding-dark-4x.gif": "8f467902a8699c38293a8cb76d879fa1",
"splash/img/dark-3x.png": "547bbdb2b0e782a7868b213c837214e2",
"splash/img/dark-1x.png": "24658dd48e42cded0cc10aa916e7eeb0",
"splash/img/branding-3x.gif": "f0536035b55121df556f7407d737f496",
"splash/img/dark-4x.png": "edf9300c39ff3b44b90cd654261efc30",
"splash/img/branding-1x.gif": "b671ce2d5b58fc5c7aa332d8daaced82",
"splash/img/light-4x.png": "9244cecccbabebe32f8736bd59df4e8f",
"splash/img/branding-dark-3x.gif": "42516802d19a483e1586eba1eaed0092",
"splash/img/branding-4x.gif": "d6ec405742e363e75cd2b292066595f6",
"splash/img/light-1x.png": "b27c576b6c305edf00d9b4650518f6c2",
"splash/img/dark-2x.png": "8ad4e9718d4bd3d352b0d6701dce5f7a",
"main.dart.js": "78728c790308e1b14f96e10b99a7deb6",
"favicon.png": "decd9438f27f0f559c8419759d28d2a0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
