<?php
/*
File revision date: 21-jan-2009
*/
defined('ON_SiTe') or die('Direct Access to this location is not allowed.');
$local_file = __FILE__ ;
$local_file = ''.substr( $local_file, 0, strpos( $local_file, "panel.php" ) ) ;
if (is_file($local_file.'version.php')):
	include($local_file.'version.php');
else:
	$module_version='0.0';
endif;
?>
<table border="0" cellspacing="0">
  <tr>
    <td colspan="2"><strong>canalmail</strong><font style="font-size:10px; color:#666666;">(vers�o <?=$module_version;?>)</font></td>
  </tr>
  <tr>
    <td><img src="<?=$staticvars['site_path'].'/modules/canalmail/images/panel.gif';?>" width="57" height="57" border="0" /></td>
    <td>
    <?php
	if ($credentials['user_type']['admin']==$credentials['user']['cod_user_type']):
		?>
		<img style="background:; padding:0px; border: solid 0px; margin:0px" src="<?=$staticvars['site_path'];?>/modules/canalmail/images/bola.gif" width="12" height="12" border="0" />&nbsp;<a class="body_text" href="<?=session($staticvars,'index.php?id='.$task.'&goto='.$cod_module.'&load=general.php');?>">Config. Geral </a><br />
        <?php
		endif;
		?>
  </tr>
</table>

