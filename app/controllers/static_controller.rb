class StaticController < ApplicationController
  def index
    expires_now
  end

  def d3_tooltip
    d3_url = construct_tooltip_url(:en, params[:tooltip_url])

    render text: fetch_url(d3_url)
  end

  def d3_static
    static_url = "http://us.battle.net/#{request.path}"
    render text: fetch_url(static_url)
  end

  def d3_images
    blank_gif = Base64.decode64("R0lGODlhAQABAPAAAAAAAAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==")

    render text: blank_gif, type: 'image/gif'
  end

  private

  def construct_tooltip_url(language, suffix)
    region_map = {
      us: :en,
      tw: :zh,
      kr: :ko
    }
    region = region_map.key(language.to_sym)
    "http://#{region}.battle.net/d3/#{language}/#{suffix}"
  end

  def fetch_url(url)
    # p url

    if Gem.win_platform?
      r = Net::HTTP.get_response URI.parse(url)
      if r.is_a? Net::HTTPSuccess
        r.body.force_encoding("UTF-8")
      else
        nil
      end
    else
      r = Curl.get url
      r.body_str
    end
  end
end
