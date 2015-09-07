require 'test_helper'

class TooltipInfoTest < ActionDispatch::IntegrationTest
  setup do
    item_key = 'item/CkAIp-GcvgcSBwgEFbUzhY0d8dNq1R2s05k5HVhG4dkdQ05EUR0QL8oqMIsSON8CQABQElgEYPcCgAFGtQHS-MgVGJWx1qcOUABYAA'

    @tw_url = 'http://tw.battle.net/d3/zh/tooltip/' + item_key
    @cn_url = 'http://www.diablo3.com.cn/action/profile/item?param=' + item_key
  end

  def response_to_json(body)
    html = Nokogiri::HTML.fragment body.gsub(/>\s+</, "><").gsub(/<!--[^>]*-->/, '')
    json = Hash.from_xml(html.to_xml)
  end

  test "tooltip tw normal" do
    VCR.use_cassette("tooltip-tw") do
      conn = Faraday.new
      @response = conn.get @tw_url

      p response_to_json(@response.body)
    end
  end

  test "tooltip tw jsonp" do
    VCR.use_cassette("tooltip-tw-jsonp") do
      conn = Faraday.new
      @response = conn.get "#{@tw_url}?format=jsonp"
    end
  end

  test "tooltip cn normal" do
    VCR.use_cassette("tooltip-cn") do
      conn = Faraday.new
      @response = conn.get @cn_url

      p response_to_json(@response.body)
    end
  end

  test "tooltip cn jsonp" do
    VCR.use_cassette("tooltip-cn-jsonp") do
      conn = Faraday.new
      @response = conn.get "#{@cn_url}&format=jsonp"
    end
  end
end
