module ApplicationHelper
  def full_title(page_title = '')
    base_title = 'Buy online'
    base_title.blank? ? base_title : page_title + ' | ' + base_title
  end
end
