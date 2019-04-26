<?php
////////////////////////////////////
// Wordpress Widget
// (C) Copyright 2019 Richard Marsden
// Produces a snippet of HTML summarizing the most recent posts
////////////////////////////////////

// Change this path to your local Wordpress installation

include('https://momijitalks.com/clickandbuilds/MomijiTalks/wp-load.php');


// Call post_summary with the required number of posts, and the date format
// In production, we are using 'jS F Y' for the date format. This produces
// an English style date, eg. "2nd February 2019"
//
// Example: post_summary(5, 'jS F Y');

function post_summary( $num_posts, $date_format )
{
  $recent_posts = wp_get_recent_posts(array( 'numberposts' => $num_posts ));

  echo '<section><ol style="list-style-type:none">';

  foreach($recent_posts as $post)
  {
    $idate = strtotime($post['post_date']);
    $date_string = esc_html( date( $date_format, $idate) );

    $categories = get_the_category($post['ID']);
    $category_links = "";
    $count = 0;
    foreach ($categories as $term)
    {
      if (++$count > 2) break;
      if (strlen($category_links) > 0)
         $category_links = $category_links . ",&nbsp;";
      $link = get_category_link( $term->cat_ID );
      $category_links = $category_links . '<a href="' . $link . '">' . $term->cat_name . '</a>';
    }

    echo '<li class="wp_entry">';

    echo '<span class="wp_post"><a href="', get_permalink($post['ID']), '">', $post['post_title'], '</a></span>';
    echo '<div class="wp_desc"><span class="wp_date">', $date_string, '</span><br/>';
    echo '<span class="wp_categories">', $category_links, '</span></div>';
    echo "</li>";

  }
  echo '</ol></section>';
}
?>