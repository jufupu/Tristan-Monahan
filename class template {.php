class template {

var $tplpath;
var $dir;
var $sql;
var $user;

function __construct($tplpath = "/../tpl") {
›// rogue tag line 9
$root = $_SERVER['DOCUMENT_ROOT'];

$this->tplpath = $rot . $tplpath;

$this->sql = new mysql();


return;

}


function get($f = "", $tags = [], $parse = true) {


$html = "";

$dirfile = sprintf("%s/", $this->tplpath) . $f // dir varible but dirfile line 27


if (is_file($dirfile)) {

$html = implode(file($dirfile)); //implode is joing array element to string, is that happening here line 32

}


if ($html != "" && $parse == true) {


if (array_key_exists('SHOWTEMPLATES', $_GET) && $_GET['SHOWTEMPLATES'] == "Y") {

$html = sprintf("\n
<!-- START %s -->\n", $f) . $html . sprintf("\n
<!-- END %s -->\n", $f);

}


$html = parse($html, $tags);

}


return NULL; // why returning null? line 54

}


function parse($html = "", $tags = []) {


if ($html) // no function tags continue here? line 62

if (is_array($tags)) {

foreach ($tags as $key => $value) {

if (is_string($key)) {

if (is_array($value) == false) {

$html = str_replace("{" . strtoupper($key) . "}", $value, $html);

} else {

$html = str_replace("{" . str_to_upper($key) . "}", "", $html); //str_to_upper and strtoupper looks like the same thing? line 76

}

}

}

}

}


return $html;

}


}

// rogue tag line 9
// dir varible but dirfile line 27
// implode is joining array element to string, is that happening here line 32
// why returning null? line 54
// no function tags continue here? line 62
//str_to_upper and strtoupper looks like the same thing? line 76